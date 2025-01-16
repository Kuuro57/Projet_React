import '../styles/Info.css';

function Info({infoTheme}) {



    {/* CONTENU DE LA PAGE */}
    return (
        <>

            <h1 id={"title"}> Informations </h1>

            <div id={infoTheme} className="info">
                <div className="tableau">
                    <div className="label">Nom :</div>
                    <div className="valeur">Allart</div>

                    <div className="label">Prénom :</div>
                    <div className="valeur">Noah</div>

                    <div className="label">Études :</div>
                    <div className="valeur">Étudiant en 2ème année de BUT Informatique</div>

                    <div className="label">Lieu Étude :</div>
                    <div className="valeur">IUT Nancy-Charlemagne</div>
                </div>
            </div>

            <p id={"para"}> Ce projet a été réalisé pour tester, apprendre et comprendre la  librairie <a href={"https://react.dev"} target={"_blank"}>React</a> </p>

        </>
    );
}

export default Info;