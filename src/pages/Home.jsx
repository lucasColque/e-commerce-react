import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";


function Home() {
  return (
    <div className="container">
      <Navbar />
      <Banner/>
      <Main/>
      <Footer />
    </div>
    
  );
}

export default Home;
