import Image from "next/image";
import RetroStatsPanel from "./RetroStatsPanel";

export default function Hero() {
  return (
    <section id="home" className="bg-black min-h-[600px]">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf: İçerik */}
          <div>
            {/* Ana Başlık */}
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Flow Orchestr: AI Agent destekli orkestranız
            </h1>

            {/* Alt Başlık */}
            <p className="text-xl font-normal text-[#9CA3AF] mb-8 leading-relaxed">
            Sadece yönlendirin ve önceliklendirin. AI Agent'lar pazarlama akışlarınızı yönetir, siz orkestrayı
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
                Çözümlere Göz At
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

          {/* Sağ Taraf: Retro Stats Panel */}
          <div className="relative w-full">
            <RetroStatsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

