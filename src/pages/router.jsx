import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SingIn from "./SingIn";
import Resgister from "./Resgister";
import FormNewMangas from "./FormNewMangas";
import AuthorForm from "./AuthorForm.jsx";
import ChapterForm from "../components/ChapterForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/index", element: <Index /> },
      { path: "/home", element: <Index /> },
      { path: "/singin", element: <SingIn /> },
      { path: "/register", element: <Resgister /> },
      { path: "/manga/:manga_id", element: <Index /> },
      { path: "/chapter/:ch_id/:author_id", element: <Index /> },
      { path: "/formNewMangas", element: <FormNewMangas /> },
      { path: "/AuthorForm", element: <AuthorForm /> },
      { path: "/chapterForm",element: <ChapterForm />}
    ]
  },
]);

export default router;
