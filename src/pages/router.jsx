import { createBrowserRouter, redirect } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SingIn from "./SingIn";
import Resgister from "./Resgister";
import FormNewMangas from "./FormNewMangas";
import AuthorForm from "./AuthorForm.jsx";
import ChapterForm from "./ChapterForm";
import Mangas from "./Mangas";
import EditChapter from "./EditChapter";
import NotAllowed from "./NotAllowed";
import MangaDetail from "./MangaDetail";
import ChapterDetail from "../components/ChapterDetail";
import MangaDetails from "../components/MangaDetails";
import DetailsChapter from "./DetailsChapter";
import Author from "./Author";
import Authorprofile from "./Authorprofile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/index", element: <Index /> },
      { path: "/home", element: <Index /> },
      { path: "/singin", element: <SingIn />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))    
         return (user) &&  redirect('/')
      } },
      { path: "/register", element: <Resgister />, loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
         return (user) &&  redirect('/')
      } },
      { path: "/manga-form", element: <FormNewMangas /> ,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
         return ( user.role === 0 || user.role === 3) &&  redirect('/not-allowed')
      }  },
      { path: "/author-form", element: <AuthorForm />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))

        console.log(user);
        return (user.role === 1 || user.role === 2 || user.role === 3  ) &&  redirect('/not-allowed')
      }},
      { path: '/me', element: <Author />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        user ? user = { role: user.role } : user = { role: 0 }
        return (user.role === 0 || user.role === 3 || user.role === 2) && redirect("/not-allowed")
      }},
      { path: "/pro", element: <Authorprofile />,
      },

         return (user.role === 1) &&  redirect('/not-allowed')
      } },

      { path: "/:manga_id/chapter-form",element: <ChapterForm />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
         return (user.role === 3 || user.role === 0  ) &&  redirect('/not-allowed')
      }},
      // NO VA PARA EL GRUPO ORANGE
      // { path: "/cia-form", element: <CompanyForm />,loader: ()=>{
      // let user = JSON.parse(localStorage.getItem('user'))
      // console.log(user);
      // return (user.role === 1 || user.role === 2 || user.role === 3  ) &&  redirect('/')
      // } },
      {path: "/not-allowed",element: <NotAllowed />},
      { path: "/MangaDetail", element: <MangaDetail />},
      { path: "/mangas/:page",element: <Mangas/>},
      {path: "/not-allowed",element: <NotAllowed />},

      //chapters
      {path:"/edit-chapter",element:<EditChapter/>},
      {path:"/not-allowed",element: <NotAllowed />},
      {path:"/details-chapter/:id/:page",element: <DetailsChapter/>, loader: () =>{
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        return (user.role === 0 || user.role === 3 ) &&  redirect('/not-allowed')
      }},
    ]
  },
]);

export default router;
