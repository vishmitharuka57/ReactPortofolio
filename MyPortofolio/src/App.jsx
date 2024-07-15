import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="Home" className="home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="portofolio" />
      </section>
      <section>Portofolio1</section>
      <section>Portofolio2</section>
      <section>Portofolio3</section>
      <section id="About">About</section>
      <section id="Contacts">Contact</section>
    </>
  );
};

export default App;
