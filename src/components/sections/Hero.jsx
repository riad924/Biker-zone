import heroImage from "../../assets/images/hero-bike.webp";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[650px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Motorbike"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[650px] items-center justify-center px-6 text-center text-white">
        <div className="max-w-2xl">

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Welcome to Bike World
          </h1>

          <p className="text-sm leading-7 md:text-base">
            Discover the thrill of every ride with Bike Zone. Explore our premium collection of motorcycles, experience exceptional performance, and enjoy the freedom of the open road. Your next adventure starts here!
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#services" variant="primary">
               View More
            </Button>

            <Button href="#contact" variant="secondary">
              Contact Us
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;