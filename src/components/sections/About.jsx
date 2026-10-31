import aboutImage from "../../assets/images/about-bike.webp";
const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 md:px-6 lg:flex-row lg:px-8">

        {/* Content */}
        <div className="w-full lg:w-1/2 text-left">
  
          <p className="tracking-wide text-red-700">
            Ipsum Porta
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            THE PROFESSIONAL
            <br />
            GEARHEADS
          </h2>

          <p className="leading-7 text-gray-700">
            Aliquam lorem ante, dapibus in, viverra quis,
            feugiat hellus rra null aut metus varius laoreet
            srtrum. Imperdiet e uricies vel Augue dapibus in,
            viverra quis srtrum aenean.
          </p>

          <a
            href="#"
            className="inline-block font-semibold text-blue-600 hover:underline"
          >
            Read More
          </a>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="Professional gearheads"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;