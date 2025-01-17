import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
import { useState } from "react";

function App() {

    {/* CONSTANTES, HOOK ET METHODES */}
    const [pageTheme, setPageTheme] = useState("lightPage"); /* Permet de gérer le thème séléctionné */
    const [navbarTheme, setNavbarTheme] = useState("lightNavbar");
    const [btnNavbarTheme, setBtnNavbarTheme] = useState("lightBtnNavbar");
    const [txtTheme, setTxtTheme] = useState("lightTxt"); /* Permet de gérer le thème de la zone info dans Home */
    const [infoTheme, setInfoTheme] = useState("lightInfo"); /* Permet de gérer le thème du tableau dans Info */

    /* Permet de changer le thème de la page */
    const changePageTheme = (e) => {
        if (e.target.checked) {
            setPageTheme("darkPage");
            setNavbarTheme("darkNavbar");
            setBtnNavbarTheme("darkBtnNavbar");
            setTxtTheme("darkTxt");
            setInfoTheme("darkInfo");
        } else {
            setPageTheme("lightPage");
            setNavbarTheme("lightNavbar");
            setBtnNavbarTheme("lightBtnNavbar");
            setTxtTheme("lightTxt");
            setInfoTheme("lightInfo");
        }
    };

    {/* CONTENU DE LA PAGE */}
    return (
        <Router>
            <div id={pageTheme} className="page">

                <nav id={navbarTheme} className="navbar">
                    <Link to={"/"} id={btnNavbarTheme} className="navbar_btn"> Home </Link>
                    <Link to={"/info"} id={btnNavbarTheme} className="navbar_btn"> Infos </Link>
                    <input type={"checkbox"} className="navbar_checkbox" onClick={changePageTheme} />
                </nav>

                {/* Routeurs (gestion des pages et URLs) */}
                <div className="content">
                    <Routes>
                        <Route path={"/"} element={<Home infoTheme={txtTheme} />} />
                        <Route path={"/info"} element={<Info infoTheme={infoTheme} />} />
                    </Routes>
                </div>

                <footer> ALLART Noah - 14/01/2025 - For Wink Company </footer>
            </div>
        </Router>
    );
}

export default App;