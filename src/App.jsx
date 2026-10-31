
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Reviews />
      </main>

      <Footer />
    </>
  );
}

export default App;
