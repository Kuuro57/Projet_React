import '../styles/Home.css';
import { useState } from "react";

function Home({ infoTheme }) {

    {/* CONSTANTES, HOOK ET METHODES */}
    const [displayTextJava, setDisplayTextJava] = useState(true);
    const [displayTextHtml, setDisplayTextHtml] = useState(false);
    const [displayTextCss, setDisplayTextCss] = useState(false);
    const [displayTextPhp, setDisplayTextPhp] = useState(false);

    /* Méthode qui change l'affichage des textes */
    const changeDisplay = (e) => {
        if (e.type === "mouseenter") {
            if (displayTextJava || displayTextHtml || displayTextCss || displayTextPhp) hideAllTextDisplay();
            switch (e.target.id) {
                case "img_java":
                    setDisplayTextJava(true);
                    break;
                case "img_html":
                    setDisplayTextHtml(true);
                    break;
                case "img_css":
                    setDisplayTextCss(true);
                    break;
                case "img_php":
                    setDisplayTextPhp(true);
                    break;
            }
        }
    };

    /* Méthode qui cache tous les textes */
    const hideAllTextDisplay = () => {
        setDisplayTextJava(false);
        setDisplayTextHtml(false);
        setDisplayTextCss(false);
        setDisplayTextPhp(false);
    };






    {/* CONTENU DE LA PAGE */}
    return (
        <>
            <h1 id={"title"}> Bienvenue sur mon site </h1>
            <h4 id={"subtitle"}> Utilisant la librairie React </h4>

            <br />
            <br />

            <div className="logos">
                <img id={"img_java"} src={"/logo_java.png"} className="img" alt="logo java" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay} />
                <img id={"img_html"} src={"/logo_html5.png"} className="img" alt="logo html5" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay} />
                <img id={"img_css"} src={"/logo_css3.svg"} className="img" alt="logo css3" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay} />
                <img id={"img_php"} src={"/logo_php.png"} className="img" alt="logo php" onMouseEnter={changeDisplay} onMouseLeave={changeDisplay} />
            </div>

            <div className="info" id={infoTheme}>
                {displayTextJava && <div id={"text_java"}>
                    <p> Le langage Java est un langage de programmation que j'ai appris lors de ma première année de BUT Informatique. </p>
                    <p> C'est un langage orienté objet utilisé généralement pour la conception d'applications. </p>
                    <p> Voici un <a href={"https://github.com/Kuuro57/SAE_Dev_App"} target="_blank">lien GitHub</a> menant à l'un de mes projets utilisant Java ! </p>
                </div>}

                {displayTextHtml && <div id={"text_html"}>
                    <p> Le language HTML est le language de base pour apprendre à développer un site web. C'est grâce à lui que l'on peut afficher du texte, des images, des vidéos, ect... </p>
                </div>}

                {displayTextCss && <div id={"text_css"}>
                    <p> Le language CSS vient compléter le language HTML et permet d'embellir notre site web. </p>
                    <p> On peut notamment : </p>
                    <ul>
                        <li> Modifier le style du texte (couleur, police, taille, soulignement, ect...) </li>
                        <li> Ordonnée l'affichage des élement (centrer, mettre sur une seul ligne, ect...) </li>
                        <li> Rendre le site responsive </li>
                    </ul>
                </div>}

                {displayTextPhp && <div id={"text_php"}>
                    <p> Le language PHP permet de gérer la partie back-end du site web. </p>
                    <p> En l'utilisant, on peut dynamiser le site et gérer plus facilement les intéractions avec
                        d'autres composants externe (un serveur, une BDD, ect...) </p>
                    <p> Voici un <a href={"https://github.com/Kuuro57/SAE_Dev_Web"} target="_blank">lien GitHub</a> menant à l'un de mes projets utilisant HTML, CSS et PHP ! </p>
                </div>}

            </div>
        </>
    );
}

export default Home;