import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <>
    <section id="Home" className="home">
      <Navbar />
      <Hero />
    </section>
    <section id="">Parallax</section>
    <section id="Services">Services</section>
    <section id="About">Parallax</section>
    <section id="Projects">Portofolio1</section>
    <section id="Home">Portofolio2</section>
    <section id="Home">Portofolio3</section>
    <section id="Contacts">Contact</section>
    
    </>
  );
};

export default App;
