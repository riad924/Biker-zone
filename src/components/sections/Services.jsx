
import { servicesData } from "../../data/servicesData";
import Card from "../common/Card";

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container">

        <h2 className="text-center text-3xl font-bold text-red-800 md:text-4xl">
          IMPROVE GENERAL RIDEABILITY
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesData.map((service) => (
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