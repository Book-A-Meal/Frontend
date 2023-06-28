import "./landing.css";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Nav";
import AllMeals from "../other/AllMeals";

function Landing() {
  return (
    <>
      <Nav />
      <AllMeals />
      <Footer />
    </>
  );
}

export default Landing;
