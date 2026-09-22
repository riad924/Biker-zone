const Card = ({ image, date, title, description }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-red-500 bg-white p-6 shadow-md transition duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />
  
      <h3 className="mt-4 mb-2 text-sm font-semibold text-red-600">
        {date}
      </h3>

      <h2 className="mb-4 text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      <p className="text-gray-800">
        {description}
      </p>

      <a
        href="#"
        className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default Card;