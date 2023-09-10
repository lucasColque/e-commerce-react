
import Main from "../components/Main";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";


function Home() {
  return (
    <>
      <Navbar />
      <div className="container bg-solid-light">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
