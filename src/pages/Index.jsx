import React from "react";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SingIn from '../pages/SingIn'

const Index = () => {
  const [changeView, setChangeView] = useState(false);
  return (

        changeView ? (
          <SingIn changeView={changeView} setChangeView={setChangeView}/>
        ) : (

            <main className=" bg-[url('../../src/assets/branden-sk.jpg')] bg-cover bg-repeat-x  bg-center absolute h-screen w-full top-0 left-0 xl:bg-[url('../../src/assets/branden-desktop.png')] "> 
            <Navbar/>
            <Welcome changeView={changeView} setChangeView={setChangeView} />
            <Carousel />
            <Footer/>
             </main>
        )
  )
};

export default Index;
