export default function Features() {
  const features = [
    {
      title: "Gerçek Zamanlı Karar Motoru",
      description: "AI agent'lar verilerinizi saniyede analiz eder, 5 dakika içinde aksiyona geçirir. Manuel analiz yerine otomatik aksiyon.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "%40 Verimlilik Artışı",
      description: "Ekibiniz rutin işlerle değil stratejik kararlarla ilgilenir. AI agents 100+ görev otomasyonu sunar.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Multi-Source Intelligence",
      description: "10+ veri kaynağından (GSC, Meta, Analytics, CRM) AI tek dashboard'da birleştirir. Tek tıkla tüm görünüm.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "LLM Destekli Öngörü",
      description: "Claude & GPT-4 entegrasyonu ile sadece ne oldu değil, ne olacak ve ne yapmalı sorularına cevap verir.",
      icon: (
        <span className="text-2xl">{"</>"}</span>
      ),
    },
  ];

  return (
    <section id="features" className="bg-black pt-16 pb-20">
      <div className="container mx-auto px-4">
        {/* Başlık - Hero stili ile uyumlu */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Flow Orchestr,
            <br />
            <span className="text-[#9CA3AF]">hız ve fırsat yaratır</span>
          </h2>
        </div>

        {/* Kartlar - Hero stili ile uyumlu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              {/* Glow efekti - hover'da */}
              <div className="absolute inset-0 rounded-lg bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300 -z-10"></div>
              
              {/* İkon - Sol üst */}
              <div className="text-green-300 mb-4">
                {feature.icon}
              </div>
              
              {/* Başlık */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {feature.title}
              </h3>
              
              {/* Açıklama */}
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

