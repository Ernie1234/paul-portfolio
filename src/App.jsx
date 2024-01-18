import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";

export default function App() {
  return (
    <div>
      <section className="h-[100vh] snap-center" id="Homepage">
        <Navbar />
        <Herosection />
      </section>
      <section id="Services" className="h-[100vh] snap-center">
        <Parallax mode="what we do" />
      </section>
      <section className="h-[100vh] snap-center" id="Portfolio">
        <Parallax mode="what we have done" />
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
