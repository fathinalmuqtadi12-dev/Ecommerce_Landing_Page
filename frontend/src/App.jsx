import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About  from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Runtext from "./assets/ui/runtext";


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Runtext />
      <About />
      <Products />
      <Services />
      <FAQ />
      <Footer />
    
    </div>
  );
}

