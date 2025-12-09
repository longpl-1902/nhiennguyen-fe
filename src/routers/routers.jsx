import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import ClassSchedule from "../pages/ClassSchedule.jsx";
import Service from "../pages/SericePage.jsx";
import AboutUs from "../pages/AboutPage.jsx";
import Register from "../pages/RegisterPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path: "home", element: <Home/>},
            {path: "class-schedule", element: <ClassSchedule/>},
            {path: "services", element: <Service/>},
            {path: "about-us", element: <AboutUs/>},
            {path: "register", element: <Register/>}
        ],
    }
]);