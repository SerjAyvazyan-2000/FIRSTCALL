import './App.scss';
import "../src/assets/index.scss"
import Header from "./pages/header/header";
import "./assets/icons/style.css"
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";
import React from "react";
import {routes} from "./routes/routes";
import {Route, Routes} from "react-router-dom";
import {
    ABOUT_ROUTE,
    BLOG_ITEM_DETAILS_ROUTES,
    BLOG_ROUTE,
    CAREER_ROUTE,
    HOME_ROUTE,
    REFERENCE_ROUTE, ROLES_ITEM_DETAILS_ROUTES,
    SERVICES_ROUTE
} from "./routes/consts";
import Blog from "./pages/blog/blog";
import Career from "./pages/career/career";
import Reference from "./pages/reference/reference";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import BlogItemDetails from "./pages/blog/components/blogItemDetails/blogItemDetails";
import RolesDetails from "./pages/career/components/rolesDetails/rolesDetails";
import ScrollTop from "./pages/components/scrollTop/scrollTop";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Routes>
                    <Route path={"/*"} element={<Home/>}/>
                    <Route path={HOME_ROUTE} element={<Home/>}/>
                    <Route path={`/${BLOG_ITEM_DETAILS_ROUTES}/:id`} element={<BlogItemDetails/>}/>
                    <Route path={`/${ROLES_ITEM_DETAILS_ROUTES}/:id`} element={<RolesDetails/>}/>
                    <Route path={SERVICES_ROUTE} element={<Services/>}/>
                    <Route path={ABOUT_ROUTE} element={<About/>}/>
                    <Route path={REFERENCE_ROUTE} element={<Reference/>}/>
                    <Route path={CAREER_ROUTE} element={<Career/>}/>
                    <Route path={BLOG_ROUTE} element={<Blog/>}/>

                    {/*<Route path={"/*"} element={<Home/>}/>*/}
                    {/*{routes.map(item=>(*/}
                    {/*    <Route key={item.id} path={item.path} element={item.components}/>*/}
                    {/*))}*/}
                </Routes>
            </main>


            <Footer/>
            <ScrollTop/>
        </div>
    );
}

export default App;
