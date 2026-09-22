import service1 from "../../assets/images/service-1.webp";
import service2 from "../../assets/images/service-2.webp";
import service3 from "../../assets/images/service-3.webp";

import Card from "../common/Card";

const Services = () => {
  const services = [
    {
      image: service1,
      date: "A SEPTEMBER 13, 2019",
      title: "MX SUNSET",
      description:
        "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere.",
    },
    {
      image: service1 ,
      date: "A SEPTEMBER 14, 2019",
      title: "4-HOUR TOUR",
      description:
        "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere.",
    },
    {
      image: service1,
      date: "A SEPTEMBER 16, 2019",
      title: "DIRT BIKE EXPERIENCE",
      description:
        "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere.",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <h2 className="mb-10 text-center text-3xl font-bold text-red-800 md:text-4xl">
          IMPROVE GENERAL RIDEABILITY
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              image={service.image}
              date={service.date}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;