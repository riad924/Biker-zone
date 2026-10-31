import service1 from "../../assets/images/service-1.webp";
import service2 from "../../assets/images/service-2.webp";
import service3 from "../../assets/images/service-3.webp";

import Card from "../common/Card";

const Services = () => {
  const services = [
    {
      image: service1,
      date: "A SEPTEMBER 13, 2012",
      title: "MX SUNSET",
      description:
        "Enjoy a smoother and more comfortable ride with improved seating, suspension, and riding ergonomics.",
    },
    {
      image: service2 ,
      date: "A FEABRUARY 14, 2019",
      title: "4-HOUR TOUR",
      description:
        "Enhance your motorcycle's performance with quality upgrades designed for better speed, power, and control.",
    },
    {
      image: service3,
      date: "A MAY 16, 2012",
      title: "DIRT BIKE EXPERIENCE",
      description:
        "Ride with confidence through improved braking, handling, and reliable safety features.",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <h2 className="text-center text-3xl font-bold text-red-800 md:text-4xl">
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