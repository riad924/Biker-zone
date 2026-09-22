import whychooseUsBike from "../../assets/images/WhyChosseus-bike.webp";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "💬",
      title: "We Are Professional",
      description:
        "We resource, train, speak, mentor and encourage marketplace leaders, business owners and career professionals to be effective in the workplace.",
    },
    {
      icon: "🎨",
      title: "We Are Creative",
      description:
        "We resource, train, speak, mentor and encourage marketplace leaders, business owners and career professionals to be effective in the workplace.",
    },
    {
      icon: "👥",
      title: "24/7 Great Support",
      description:
        "We resource, train, speak, mentor and encourage marketplace leaders, business owners and career professionals to be effective in the workplace.",
    },
  ];

  return (
    <section id="whychooseus" className="bg-pink-200 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Why{" "}
            <span className="text-red-500">
              Choose Us
            </span>
          </h2>

          <p className="mt-3 text-gray-700">
            Achievements are now made easy using Political
            WordPress Theme! Share the news and press releases
            to your focus group and complete causes using donations.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={whychooseUsBike}
              alt="Why choose us"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          {/* Features */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">

              {features.map((feature) => (
                <div key={feature.title}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">
                      {feature.icon}
                    </span>

                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-3 leading-7 text-gray-800">
                    {feature.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;