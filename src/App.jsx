import Contacts from "./components/Contacts";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

export default function App() {
  return (
    <div>
      <section className="h-[100vh] snap-center" id="Homepage">
        <Navbar />
        <Herosection />
      </section>
      <section className="h-[100vh] snap-center" id="Portfolio">
        <Parallax mode="Portfolio" />
      </section>
      <Portfolio />
      <section id="Services" className="h-[100vh] snap-center">
        <Parallax mode="service" />
      </section>
      <section className="h-[100vh] snap-center">
        <Service />
      </section>
      <section className="h-[100vh] snap-center" id="About">
        about and skills
      </section>
      <section className="h-[100vh] snap-center" id="Contact">
        <Contacts />
      </section>
    </div>
  );
}
