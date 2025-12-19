import Header from "./components/header";
import Hero from "@/main/herohome";
import Overview from "@/main/overview";
import Detection from "./components/detection";
import Solutions from "@/main/solutions";
import ProductsPage from "@/main/products";
import Footer from "./components/footer"
import CallToAction from "./components/calltoaction";
import ValueProps from "./components/valueprops";



export default function Home() {
  return (
    <>


        <Header />
        <Hero />
        <Overview />
        <Detection />
        <ValueProps />
        <Solutions />
        <ProductsPage />
      <CallToAction />
        <Footer />
    </>
  );
}
