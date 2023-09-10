
import Main from "../components/Main";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container bg-solid-light">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
