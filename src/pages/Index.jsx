import React from "react";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SingIn from '../pages/SingIn'
import { useParams } from "react-router";



const Index = () => {
  const [changeView, setChangeView] = useState(false);

  const {manga_id, ch_id, author_id} = useParams()


  return (

        changeView ? (
          <SingIn changeView={changeView} setChangeView={setChangeView}/>
        ) : (

            <main className=" bg-[url('/assets/branden-sk.jpg')] bg-cover  bg-no-repeat absolute lg:bg-[10%]    h-screen w-full  lg:h-[62%]     top-0 left-0 xl:bg-[url('/assets/branden-desktop.png')] "> 
            <Navbar/>
            <Welcome changeView={changeView} setChangeView={setChangeView} />
            <Carousel />
            <Footer/>
             </main>
        )
  )
};

export default Index;
