import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Work from "./components/work/Work";
{
  /*import Portfolio from "./components/portfolio/Portfolio";*/
}
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <section id="Home" className="home">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portofolio" />
      </section>
      <section id="Projects">
        <Work />
      </section>
      <section id="Contacts" /* style={{margin:"65px"}}*/>
        <Contact />
      </section>
    </>
  );
};

export default App;
