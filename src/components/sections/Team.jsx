import ceo1 from "../../assets/images/ceo-1.webp";
import ceo2 from "../../assets/images/ceo-2.webp";
import ceo3 from "../../assets/images/ceo-3.webp";
import ceo4 from "../../assets/images/ceo-4.webp";

const Team = () => {
  const members = [
    {
      image: ceo1,
      name: "Lorem Amet",
      role: "CEO and Founder",
    },
    {
      image: ceo2,
      name: "Lorem Amet",
      role: "CEO and Founder",
    },
    {
      image: ceo3,
      name: "Lorem Amet",
      role: "CEO and Founder",
    },
    {
      image: ceo4,
      name: "Lorem Amet",
      role: "CEO and Founder",
    },
  ];

  return (
    <section id="team" className="bg-pink-200 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Team{" "}
            <span className="text-red-500">
              Members
            </span>
          </h2>

          <p className="mt-3 text-gray-700">
            Team is now made easy using Political WordPress Theme!
            Share the news and press releases to your focus group
            and complete charity causes using donations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.image}>
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
              />

              <h3 className="mt-4 text-xl font-bold">
                {member.name}
              </h3>

              <p className="mt-2 text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;