import Header from "./components/header";
import Hero from "@/main/herohome";
import WhoItsFor from "./components/whoitsfor";
import ProofStats from "./components/proofstats";
import ValueProps from "./components/valueprops";
import RailProtocol from "./components/railprotocol";
import CallToAction from "./components/calltoaction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhoItsFor />
      <ProofStats />
      <ValueProps />
      <RailProtocol />
      <CallToAction />
      <Footer />
    </>
  );
}
