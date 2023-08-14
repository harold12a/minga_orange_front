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
import DetailsChapter from "./DetailsChapter";
import Author from "./Author";
import AuthorProfile from "./Author_profile";
import NewRole from "./NewRole";
import AdminPanel from "./AdminPanel"
import MyMangas from "./MyMangas";
import Author_mangas from "../components/Author_mangas";


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
      { path: "/manga-form", element: <FormNewMangas /> , loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 0 || user.role === 3 || user.role === 2) && redirect("/not-allowed")
      }},
      { path: "/author-form", element: <AuthorForm />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 1 || user.role === 2 || user.role === 3) && redirect("/not-allowed")
    }},
      { path: '/pro', element: <Author />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 1 || user.role === 2 || user.role === 3) && redirect("/not-allowed")
    }},
      { path: '/me', element: <AuthorProfile />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 0 || user.role === 3 || user.role === 2) && redirect("/not-allowed")
    }},
      { path:'/new-role', element:<NewRole />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 3) && redirect("/not-allowed")
    }},
      { path:'/admin', element:<AdminPanel />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))
        return (user.role === 3) && redirect("/not-allowed")
    }},
      { path: "/:manga_id/chapter-form",element: <ChapterForm />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
         return (user.role === 3 || user.role === 0  ) &&  redirect('/not-allowed')
      }},
      { path: "/manga/:manga_id/:page", element: <MangaDetail />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))

        user ? user = { role: user.role, online: true } : user = { role: 0, online: false }

        return (user.online === false) && redirect("/not-allowed")
    }},
      { path: "/mangas/:page",element: <Mangas/>, loader: async () => {
        let user = JSON.parse(localStorage.getItem('user'));

        user ? user = { role: user.role, online: true } : user = { role: 0, online: false }

        return (user.online === false) && redirect("/not-allowed")
    }},
      {path:"/mymangas",element: <MyMangas />, loader: async () => {
        let user = JSON.parse(localStorage.getItem("user"))

        user ? user = { role: user.role } : user = { role: 0 }

        return (user.role === 0 || user.role === 3) && redirect("/")
    }}, 
      //chapters
      {path:"/edit-chapter",element:<EditChapter/>},
      {path:"/details-chapter/:id/:page",element: <DetailsChapter/>,loader: () =>{
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        return (user.role === 0 || user.role === 3 ) &&  redirect('/not-allowed')
      }},
      {path:"/not-allowed",element: <NotAllowed />},
    ]
  },
]);

export default router;
