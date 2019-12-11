import React, { Fragment } from "react";
import Announce from "../components/Announce";
import "./home.css";



function Home(props){
    return (
        <Fragment>
            <div className="container-fondus ">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">

                        <body>
                            <br></br>
                            <h1 className="section-heading" > Bienvenue sur ... </h1>
                            <hr className="light my-4" />
                            
                            <p>
                                
                                Vous vous êtes encore faits avoir par Myway ?
                                Vous voulez échanger vos cours sans avoir à 
                                spammer la page Facebook de CS ? Ce site est fait pour vous !
                                <br /> Vous allez pouvoir proposer le cours que vous voulez échanger
                                et voir les cours déjà proposés par d'autres élèves. Si l'un
                                d'eux vous intéresse, rentrez en contact avec l'élève qui le
                                propose grâce à LinkCS.
                                <br />
                                Si vous rencontrez un problème ou avez une remarque, n'hésitez pas à envoyer un mail à
                                <a id="mail_contact" href="mailto:echangeselectifs@ml.viarezo.fr"> echangeselectifs@ml.viarezo.fr </a>
                                
                                </p>
                        </body>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Home;