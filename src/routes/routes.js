import Home from "../pages/home/home";
import Blog from "../pages/blog/blog";
import Career from "../pages/career/career";
import Reference from "../pages/reference/reference";
import About from "../pages/about/about";
import Services from "../pages/services/services";
import {ABOUT_ROUTE, BLOG_ROUTE, CAREER_ROUTE, HOME_ROUTE, REFERENCE_ROUTE, SERVICES_ROUTE} from "./consts";





export const routes = [
    {path:HOME_ROUTE,components:<Home/>,id:1},
    {path:BLOG_ROUTE,components:<Blog/>,id:2},
    {path:CAREER_ROUTE,components:<Career/>,id:3},
    {path:REFERENCE_ROUTE,components:<Reference/>,id:4},
    {path:ABOUT_ROUTE,components:<About/>,id:5},
    {path:SERVICES_ROUTE,components:<Services/>,id:6},

]