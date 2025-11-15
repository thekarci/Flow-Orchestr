export default function Services() {
  const services = [
    {
      title: "BudgetGuard AI",
      description: "Aylık Bütçenizi aşmadan, AI sürekli günlük optimize eder",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 8-bit Rocket */}
          <rect x="28" y="48" width="8" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="26" y="44" width="12" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="24" y="40" width="16" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="22" y="36" width="20" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="20" y="32" width="24" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="18" y="28" width="28" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="16" y="24" width="32" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="14" y="20" width="36" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="12" y="16" width="40" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="10" y="12" width="44" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="8" y="8" width="48" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="6" y="4" width="52" height="4" fill="#86EFAC" opacity="0.8"/>
          {/* Glow effect */}
          <rect x="28" y="48" width="8" height="4" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
          <rect x="24" y="40" width="16" height="4" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
          <rect x="20" y="32" width="24" height="4" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
        </svg>
      ),
    },
    {
      title: "IntentRadar",
      description: "Kullanıcılarınız ne istiyor henüz bilmeden AI size söyler",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 8-bit Neural Network */}
          <circle cx="16" cy="16" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="32" cy="12" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="48" cy="16" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="20" cy="32" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="32" cy="32" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="44" cy="32" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="16" cy="48" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="32" cy="52" r="3" fill="#86EFAC" opacity="0.8"/>
          <circle cx="48" cy="48" r="3" fill="#86EFAC" opacity="0.8"/>
          {/* Connections */}
          <line x1="16" y1="16" x2="32" y2="12" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="12" x2="48" y2="16" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="16" y1="16" x2="20" y2="32" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="12" x2="32" y2="32" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="48" y1="16" x2="44" y2="32" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="20" y1="32" x2="32" y2="32" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="32" x2="44" y2="32" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="20" y1="32" x2="16" y2="48" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="32" y1="32" x2="32" y2="52" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          <line x1="44" y1="32" x2="48" y2="48" stroke="#86EFAC" strokeWidth="1.5" opacity="0.6"/>
          {/* Glow effect */}
          <circle cx="32" cy="32" r="3" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
          <circle cx="16" cy="16" r="3" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
          <circle cx="48" cy="16" r="3" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
        </svg>
      ),
    },
    {
      title: "CompeteIQ",
      description: "Rakipleriniz her hamlesinde AI sizi uyarır ve strateji önerir",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 8-bit GPU/Server */}
          <rect x="12" y="16" width="40" height="32" fill="#86EFAC" opacity="0.8"/>
          <rect x="16" y="20" width="32" height="4" fill="#86EFAC" opacity="0.6"/>
          <rect x="16" y="28" width="32" height="4" fill="#86EFAC" opacity="0.6"/>
          <rect x="16" y="36" width="32" height="4" fill="#86EFAC" opacity="0.6"/>
          <rect x="16" y="44" width="32" height="4" fill="#86EFAC" opacity="0.6"/>
          {/* Internal components */}
          <rect x="20" y="24" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          <rect x="36" y="24" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          <rect x="20" y="32" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          <rect x="36" y="32" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          <rect x="20" y="40" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          <rect x="36" y="40" width="8" height="2" fill="#86EFAC" opacity="0.9"/>
          {/* Connectors */}
          <rect x="24" y="48" width="4" height="4" fill="#86EFAC" opacity="0.8"/>
          <rect x="36" y="48" width="4" height="4" fill="#86EFAC" opacity="0.8"/>
          {/* Glow effect */}
          <rect x="12" y="16" width="40" height="32" fill="#86EFAC" opacity="0.3" filter="blur(2px)"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-black pt-16 pb-20">
      <div className="container mx-auto px-4">
        {/* Başlık - Features stili ile uyumlu */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Hangi sürecinizi 
            <br />
            <span className="text-[#9CA3AF]">AI Agent'lara devretmek istersiniz?</span>
          </h2>
        </div>

        {/* Kartlar - Features stili ile uyumlu */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] flex flex-col"
            >
              {/* Glow efekti - hover'da */}
              <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
              
              {/* İkon - Üst */}
              <div className="flex justify-center mb-6">
                <div className="text-green-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Başlık */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight text-center">
                {service.title}
              </h3>
              
              {/* Açıklama */}
              <p className="text-[#9CA3AF] text-sm leading-relaxed text-center mb-6 flex-grow">
                {service.description}
              </p>

              {/* Buton - Hero stili ile uyumlu */}
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold w-full">
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
          ))}
        </div>
      </div>
    </section>
  );
}

