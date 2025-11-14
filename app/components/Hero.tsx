import Image from "next/image";
import SnakeGame from "./SnakeGame";

export default function Hero() {
  return (
    <section id="home" className="bg-black min-h-[600px]">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf: İçerik */}
          <div>
            {/* Üst Başlık */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{"</>"}</span>
              <span className="text-white text-sm"> Sen oynarken // Biz otomatik hale getirelim</span>
            </div>

            {/* Ana Başlık */}
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Flow Orchestr: Dijital pazarlama orkestraniz
            </h1>

            {/* Alt Başlık */}
            <p className="text-xl font-normal text-[#9CA3AF] mb-8 leading-relaxed">
            Sadece yönlendirin ve önceliklendirin. AI Agent’lar pazarlama akışlarınızı yönetir, siz orkestrayı
            </p>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                AI Agent Çözümlerini Keşfet
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Canlı Demo İsteyin
              </button>
            </div>
          </div>

          {/* Sağ Taraf: Yılan Oyunu + Neural Network Efektleri */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            {/* Yılan Oyunu Canvas */}
            <div className="absolute inset-0 z-20">
              <SnakeGame />
            </div>

            {/* Neural Network arka plan efektleri - düşük opacity */}
            <div className="absolute inset-0 opacity-20 z-10">
              {/* Neural network noktaları */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Bağlantı çizgileri */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#06B6D4" strokeWidth="1"></line>
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#3B82F6" strokeWidth="1"></line>
              </svg>
            </div>

            {/* Glow efektleri - çok hafif */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

