import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* <Preloader /> */}
      <Navbar loading={loading} />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
