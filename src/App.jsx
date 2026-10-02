import Navbar from "./components/heroSection/Navbar.jsx";
import Hero from "./components/heroSection/Hero.jsx";
import LogosStrip from "./components/heroSection/LogosStrip.jsx";
import SectionTwo from "./components/section2/SectionTwo.jsx";
import Third from "./components/Netlinks/Third.jsx";
import Industries from "./components/Industries/Industries.jsx";
import Section5 from "./components/Section5/Section5.jsx";
import Section6 from "./components/Section6/Section6.jsx";
import CtaBanner from "./components/footer/CtaBanner.jsx";
import SiteFooter from "./components/footer/SiteFooter.jsx";

// The whole page = these sections, in order.
function App() {
  return (
    <div>
      {/* 1. heroSection */}
      <Navbar />
      <Hero />
      <LogosStrip />

      {/* 2. Section 2 */}
      <SectionTwo />

      {/* 3. Netlinks */}
      <Third />

      {/* 4. Industries */}
      <Industries />

      {/* 5. Section 5 + Section 6 */}
      <Section5 />
      <Section6 />

      {/* 6. footer */}
      <CtaBanner />
      <SiteFooter />
    </div>
  );
}

export default App;
