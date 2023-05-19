import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";



// bg-cove

function App() {
  return (
    <>
      <div>
        <div className=" bg-[url('../../src/assets/branden-sk.jpg')] bg-cover bg-repeat-x  bg-center absolute h-screen w-full top-0 left-0 xl:bg-[url('../../src/assets/branden-desktop.png')] ">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
