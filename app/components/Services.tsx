export default function Services() {
  const services = [
    {
      title: "Web Geliştirme",
      description: "Modern ve responsive web siteleri geliştiriyoruz",
    },
    {
      title: "Mobil Uygulamalar",
      description: "iOS ve Android için native uygulamalar",
    },
    {
      title: "UI/UX Tasarım",
      description: "Kullanıcı dostu ve estetik arayüz tasarımları",
    },
    {
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer alın",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-4 pt-24 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
        <p className="text-gray-400 text-lg">
          Size sunduğumuz profesyonel hizmetler
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg border border-gray-800 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-accent">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

