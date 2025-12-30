import Header from "./components/header";
import Hero from "@/main/herohome";
import ProductShowcase from "./components/productshowcase";
import Detection from "./components/detection";
import OntologyTeaser from "./components/ontologyteaser";
import WhoItsFor from "./components/whoitsfor";
import LatencyComparison from "./components/latencycomparison";
import CallToAction from "./components/calltoaction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Detection />
      <OntologyTeaser />
      <WhoItsFor />
      <LatencyComparison />
      <CallToAction />
      <Footer />
    </>
  );
}
