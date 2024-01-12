import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <section className="h-[100vh] snap-center" id="Homepage">
        <Navbar />
        <Herosection />
      </section>
      <section id="Services" className="h-[100vh] snap-center">
        parallax
      </section>
      <section className="h-[100vh] snap-center" id="Portfolio">
        parallax
      </section>
      <section className="h-[100vh] snap-center">portfolio1</section>
      <section className="h-[100vh] snap-center">portfolio2</section>
      <section className="h-[100vh] snap-center">portfolio3</section>
      <section className="h-[100vh] snap-center" id="About">
        about and skills
      </section>
      <section className="h-[100vh] snap-center" id="Contact">
        parallax
      </section>
    </div>
  );
}
