import './App.css';
import "../src/assets/index.scss"
import Header from "./pages/header/header";
import "./assets/icons/style.css"
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";
import React from "react";
import {routes} from "./routes/routes";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Routes>
                    <Route path={"/*"} element={<Home/>}/>
                    {routes.map(item=>(
                        <Route path={item.path} element={item.components}/>
                    ))}
                </Routes>
            </main>


            <Footer/>
        </div>
    );
}

export default App;
