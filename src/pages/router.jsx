import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SingIn from "./SingIn";
import Resgister from "./Resgister";


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
        { path: "/manga/:manga_id", element: <Index />},
        { path: "/chapter/:ch_id/:author_id", element: <Index />}
    ]
  },
]);

export default router;
