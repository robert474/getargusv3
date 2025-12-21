import Header from "./components/header";
import Hero from "@/main/herohome";
import ProofStats from "./components/proofstats";
import RailProtocol from "./components/railprotocol";
import WhoItsFor from "./components/whoitsfor";
import ValueProps from "./components/valueprops";
import CallToAction from "./components/calltoaction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProofStats />
      <RailProtocol />
      <WhoItsFor />
      <ValueProps />
      <CallToAction />
      <Footer />
    </>
  );
}
