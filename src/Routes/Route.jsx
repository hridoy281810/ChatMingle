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
                path: "home",
                element:<Home ></Home>
              },
              {
                path:'/',
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