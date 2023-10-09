import './App.css';
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
    REFERENCE_ROUTE,
    SERVICES_ROUTE
} from "./routes/consts";
import Blog from "./pages/blog/blog";
import Career from "./pages/career/career";
import Reference from "./pages/reference/reference";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import BlogItemDetails from "./pages/blog/components/blogItemDetails/blogItemDetails";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Routes>
                    <Route path={"/*"} element={<Home/>}/>
                    <Route path={HOME_ROUTE} element={<Home/>}/>
                    <Route path={`/${BLOG_ITEM_DETAILS_ROUTES}/:id`} element={<BlogItemDetails/>}/>
                    <Route path={CAREER_ROUTE} element={<Services/>}/>
                    <Route path={REFERENCE_ROUTE} element={<About/>}/>
                    <Route path={ABOUT_ROUTE} element={<Reference/>}/>
                    <Route path={SERVICES_ROUTE} element={<Career/>}/>
                    <Route path={BLOG_ROUTE} element={<Blog/>}/>

                    {/*<Route path={"/*"} element={<Home/>}/>*/}
                    {/*{routes.map(item=>(*/}
                    {/*    <Route key={item.id} path={item.path} element={item.components}/>*/}
                    {/*))}*/}
                </Routes>
            </main>


            <Footer/>
        </div>
    );
}

export default App;
