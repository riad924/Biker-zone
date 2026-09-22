import gallery2 from "../../assets/images/gallery-2.webp"
import gallery3 from "../../assets/images/gallery-3.webp"
import gallery4 from "../../assets/images/gallery-4.webp"
import gallery1 from "../../assets/images/gallery-1.webp"

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Sunset motorcycle",
    },
    {
      src: gallery2,
      alt: "Motorbike",
    },
    {
      src: gallery3,
      alt: "Motorcycle",
    },
    {
      src: gallery4,
      alt: "Bike rider",
    },
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <h2 className="mb-10 text-center text-3xl font-bold text-red-800 md:text-4xl">
          MAXIMUM SPEED &
          <br />
          STABILITY
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-80 w-full rounded-md object-cover transition duration-300 hover:scale-105"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;