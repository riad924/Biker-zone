import aboutImage from "../../assets/images/about-bike.webp";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* About Content */}
        <div className="space-y-6">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            About Our Company
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            THE PROFESSIONAL
            <br />
            GEARHEADS
          </h2>

          <p className="max-w-xl text-base leading-8 text-gray-600">
            We are passionate about motorcycles and dedicated to
            delivering quality products and reliable services.
            Our goal is to make every ride safer, smoother, and
            more enjoyable for motorcycle enthusiasts.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700">
            <li>✓ Quality motorcycle products</li>
            <li>✓ Professional maintenance services</li>
            <li>✓ Customer-focused support</li>
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Contact Us
          </a>

        </div>

        {/* About Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={aboutImage}
            alt="Professional motorcycle and bike maintenance"
            loading="lazy"
            decoding="async"
            className="h-full max-h-[500px] min-h-[300px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;