import '../styles/Info.css';

function Info({infoTheme}) {

    {/* Constantes */}




    {/* CONSTANTES, HOOK ET METHODES */}
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

        </>
    );
}

export default Info;