"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface TouchStart {
  x: number;
  y: number;
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStartRef = useRef<TouchStart | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false); // Yeni: Otomatik mod state'i
  
  // Grid ayarları - mobil uyumlu
  const GRID_SIZE = 20;
  const CELL_SIZE = 15;
  const COLS = Math.floor(500 / CELL_SIZE);
  const ROWS = Math.floor(500 / CELL_SIZE);

  const gameStateRef = useRef<{
    snake: Position[];
    food: Position;
    direction: { x: number; y: number };
    score: number;
    gameOver: boolean;
    gameLoop: number | null;
  }>({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 1, y: 0 },
    score: 0,
    gameOver: false,
    gameLoop: null,
  });

  // Yemek oluştur
  const generateFood = useCallback((): Position => {
    const snake = gameStateRef.current.snake;
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [COLS, ROWS]);

  // Yön değiştirme fonksiyonu
  const changeDirection = useCallback((newDir: { x: number; y: number }) => {
    const state = gameStateRef.current;
    const currentDir = state.direction;
    
    // Ters yöne gitmeyi engelle
    if (currentDir.x !== -newDir.x || currentDir.y !== -newDir.y) {
      state.direction = newDir;
    }
  }, []);

  // Çizim fonksiyonu
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { snake, food, gameOver } = gameStateRef.current;

    // Canvas'ı temizle
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
      ctx.fillStyle = "#ffffff";
      ctx.font = "20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 10);
      ctx.fillText(`Score: ${gameStateRef.current.score}`, canvas.width / 2, canvas.height / 2 + 20);
      return;
    }

    // Grid çizgileri (ince, görünür grid)
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i <= ROWS; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(canvas.width, i * CELL_SIZE);
      ctx.stroke();
    }

    // Yılanı çiz
    ctx.fillStyle = "#ffffff";
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Baş - biraz daha parlak
        ctx.fillStyle = "#ffffff";
      } else {
        ctx.fillStyle = "#e0e0e0";
      }
      ctx.fillRect(
        segment.x * CELL_SIZE + 1,
        segment.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      );
    });

    // Yemi çiz
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(
      food.x * CELL_SIZE + 2,
      food.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    );
  }, [CELL_SIZE, COLS, ROWS]);

  // Oyun güncelleme - AI kontrolü eklendi
  const update = useCallback(() => {
    const state = gameStateRef.current;
    if (state.gameOver) return;

    // Otomatik mod aktifse ve kullanıcı kontrolü yoksa, AI kontrolü
    if (isAutoMode && !state.gameOver) {
      const head = { ...state.snake[0] };
      const food = state.food;
      
      // En kısa yol algoritması (basit AI)
      const directions = [
        { x: 0, y: -1 }, // Yukarı
        { x: 1, y: 0 },  // Sağ
        { x: 0, y: 1 },  // Aşağı
        { x: -1, y: 0 }, // Sol
      ];
      
      // Ters yöne gitmeyi engelle
      const currentDir = state.direction;
      const validDirs = directions.filter(
        dir => dir.x !== -currentDir.x || dir.y !== -currentDir.y
      );
      
      // Yemeğe doğru en iyi yönü seç
      let bestDir = validDirs[0];
      let minDistance = Infinity;
      
      validDirs.forEach(dir => {
        const nextPos = {
          x: head.x + dir.x,
          y: head.y + dir.y,
        };
        
        // Duvar kontrolü
        if (nextPos.x < 0 || nextPos.x >= COLS || nextPos.y < 0 || nextPos.y >= ROWS) {
          return;
        }
        
        // Kendine çarpma kontrolü
        if (state.snake.some(segment => segment.x === nextPos.x && segment.y === nextPos.y)) {
          return;
        }
        
        // Manhattan mesafesi
        const distance = Math.abs(nextPos.x - food.x) + Math.abs(nextPos.y - food.y);
        
        if (distance < minDistance) {
          minDistance = distance;
          bestDir = dir;
        }
      });
      
      // En iyi yön bulunamadıysa (yılan kapalı alanda), rastgele geçerli yön seç
      if (minDistance === Infinity) {
        bestDir = validDirs[Math.floor(Math.random() * validDirs.length)];
      }
      
      state.direction = bestDir;
    }

    // Yılanın başını yeni konuma taşı
    const head = { ...state.snake[0] };
    head.x += state.direction.x;
    head.y += state.direction.y;

    // Duvar kontrolü
    if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
      state.gameOver = true;
      draw();
      return;
    }

    // Kendine çarpma kontrolü
    if (state.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      state.gameOver = true;
      draw();
      return;
    }

    state.snake.unshift(head);

    // Yemek yeme kontrolü
    if (head.x === state.food.x && head.y === state.food.y) {
      state.score += 10;
      state.food = generateFood();
    } else {
      state.snake.pop();
    }

    // Otomatik yön değiştirme (rastgele ama mantıklı) - sadece otomatik mod değilse
    if (!isAutoMode && Math.random() < 0.1) {
      const directions = [
        { x: 0, y: -1 }, // Yukarı
        { x: 1, y: 0 },  // Sağ
        { x: 0, y: 1 },  // Aşağı
        { x: -1, y: 0 }, // Sol
      ];
      
      // Ters yöne gitme
      const currentDir = state.direction;
      const validDirs = directions.filter(
        dir => dir.x !== -currentDir.x || dir.y !== -currentDir.y
      );
      
      // Yemeğe doğru gitme eğilimi
      const foodDir = {
        x: state.food.x - head.x > 0 ? 1 : state.food.x - head.x < 0 ? -1 : 0,
        y: state.food.y - head.y > 0 ? 1 : state.food.y - head.y < 0 ? -1 : 0,
      };
      
      const preferredDir = validDirs.find(
        dir => dir.x === foodDir.x || dir.y === foodDir.y
      );
      
      if (preferredDir && Math.random() < 0.7) {
        state.direction = preferredDir;
      } else {
        state.direction = validDirs[Math.floor(Math.random() * validDirs.length)];
      }
    }

    draw();
  }, [COLS, ROWS, draw, generateFood, isAutoMode]);

  // Klavye kontrolleri (Desktop)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const state = gameStateRef.current;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          changeDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          e.preventDefault();
          changeDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          e.preventDefault();
          changeDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          e.preventDefault();
          changeDirection({ x: 1, y: 0 });
          break;
        case " ":
          e.preventDefault();
          if (state.gameOver) {
            // Yeniden başlat
            state.snake = [{ x: 10, y: 10 }];
            state.food = generateFood();
            state.direction = { x: 1, y: 0 };
            state.score = 0;
            state.gameOver = false;
            setGameStarted(true);
          } else {
            setGameStarted(!gameStarted);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [generateFood, changeDirection]);

  // Dokunmatik kontroller (Mobil)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      // Minimum swipe mesafesi (30px)
      const minSwipeDistance = 30;

      // Swipe yönünü belirle
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Yatay swipe
        if (Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX > 0) {
            // Sağ
            changeDirection({ x: 1, y: 0 });
          } else {
            // Sol
            changeDirection({ x: -1, y: 0 });
          }
        }
      } else {
        // Dikey swipe
        if (Math.abs(deltaY) > minSwipeDistance) {
          if (deltaY > 0) {
            // Aşağı
            changeDirection({ x: 0, y: 1 });
          } else {
            // Yukarı
            changeDirection({ x: 0, y: -1 });
          }
        }
      }

      touchStartRef.current = null;

      // Oyunu başlat (ilk dokunmatık hareket)
      if (!gameStarted && !gameStateRef.current.gameOver) {
        setGameStarted(true);
      }

      // Game Over durumunda tekrar başlat
      if (gameStateRef.current.gameOver) {
        const state = gameStateRef.current;
        state.snake = [{ x: 10, y: 10 }];
        state.food = generateFood();
        state.direction = { x: 1, y: 0 };
        state.score = 0;
        state.gameOver = false;
        setGameStarted(true);
      }
    };

    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    canvas.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", (e) => e.preventDefault());
    };
  }, [gameStarted, generateFood, changeDirection]);

  // Oyun döngüsü - otomatik mod için daha hızlı güncelleme
  useEffect(() => {
    draw();

    if (!gameStarted) return;

    // Otomatik modda daha hızlı hareket
    const intervalTime = isAutoMode ? 100 : 150;
    
    const interval = setInterval(() => {
      update();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [gameStarted, draw, update, isAutoMode]);

  // Otomatik başlat ve AI modu
  useEffect(() => {
    let userInteracted = false;
    
    const checkUserInteraction = () => {
      userInteracted = true;
      window.removeEventListener('keydown', checkUserInteraction);
      window.removeEventListener('touchstart', checkUserInteraction);
    };
    
    window.addEventListener('keydown', checkUserInteraction);
    window.addEventListener('touchstart', checkUserInteraction);
    
    const timer = setTimeout(() => {
      if (!userInteracted && !gameStarted) {
        // 30 saniye sonra kullanıcı başlatmadıysa otomatik mod ile başlat
        setIsAutoMode(true);
        setGameStarted(true);
      }
    }, 30000); // 30 saniye

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', checkUserInteraction);
      window.removeEventListener('touchstart', checkUserInteraction);
    };
  }, [gameStarted]);

  // Kullanıcı manuel başlatırsa otomatik modu kapat
  useEffect(() => {
    if (gameStarted && !isAutoMode) {
      // Kullanıcı manuel başlattı
      setIsAutoMode(false);
    }
  }, [gameStarted, isAutoMode]);

  return (
    <div className="relative w-full h-full touch-none">
      <canvas
        ref={canvasRef}
        width={COLS * CELL_SIZE}
        height={ROWS * CELL_SIZE}
        className="w-full h-full"
        style={{ imageRendering: "pixelated", touchAction: "none" }}
      />
      {!gameStarted && !gameStateRef.current.gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="text-white text-sm font-mono text-center px-4">
            <p className="hidden md:block">Press SPACE to start</p>
            <p className="hidden md:block text-xs mt-2 opacity-70">Use arrow keys to play</p>
            <p className="block md:hidden">Touch to start</p>
            <p className="block md:hidden text-xs mt-2 opacity-70">Swipe to control</p>
            {isAutoMode && (
              <p className="text-xs mt-4 opacity-50 text-cyan-400">AI Mode: Auto-playing...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
