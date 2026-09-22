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

        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[650px] items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Welcome to Bike World
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-7 md:text-lg">
            Ac mi duis mollis. Sapiente? Scelerisque quae,
            penatibus? Suscipit class corporis nostra rem quos
            voluptatibus habitant? Fames, vivamus minim nemo enim,
            gravida lobortis quasi, eum.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary">
              View More
            </Button>

            <Button variant="secondary">
              Contact Us
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;