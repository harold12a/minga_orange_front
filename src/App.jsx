import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import router from "./pages/router";
import axios from "axios";
import apiUrl from './apiUrl.js'
import header from "./header";

function App() {

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      axios.post(apiUrl + 'auth/token', null, header())
    }

  },[])

  return (   
    <RouterProvider router={router}/>  
  );
}

export default App;
