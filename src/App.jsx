import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// bg-cove

function App() {

  return (
    <>
      <div className=" bg-[url('../../src/assets/branden-sk.jpg')] bg-cover bg-repeat-x  bg-center absolute h-screen w-screen top-0 left-0 " >
     <Navbar/>
     <Main/>
     <Footer/>
      </div>
    </>
  )
}

export default App
