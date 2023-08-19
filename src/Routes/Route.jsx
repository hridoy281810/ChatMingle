import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layou/Main";
import Registration from "../Page/Registration/Registration";
import Login from "../Page/Login/Login";

const router = createBrowserRouter([
      {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element:<Home ></Home>
              },
              {
                path:'registration',
                element:<Registration></Registration>
              },
              {
                path:'login',
                element:<Login></Login>
              }
        ]
      }
  ]);
  export default router;