import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="Home" className="home">
        <Navbar />
        <Hero />
      </section>
      <section >
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section >
        <Parallax type="portofolio" />
      </section >
      <section id="Projects">
        <Portfolio />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section ></section>
      <section id="Contacts">Contact</section>
    </>
  );
};

export default App;
