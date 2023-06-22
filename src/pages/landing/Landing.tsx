import "./landing.css";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navbar/Nav";

function Landing() {
  return (
    <>
      <Nav />

      <div className="body">
        <Footer />
      </div>
      <Footer />
    </>
  );
}

export default Landing;
