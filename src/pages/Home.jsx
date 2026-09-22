import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Team from "../components/sections/Team";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Gallery from "../components/sections/Gallery";


const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Team />
      <WhyChooseUs />
      <Gallery />
    </main>
  );
};

export default Home;