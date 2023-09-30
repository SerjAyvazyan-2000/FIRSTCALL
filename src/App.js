import './App.css';
import "../src/assets/index.scss"
import Header from "./pages/header/header";
import "./assets/icons/style.css"
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
