import React, { useState } from "react";


function AddAnnounce(props){

    return(
        <div>
            <form method = 'POST' action = '/api/addToListe'>
            <p>Sequence:</p>
            <input type = 'text' name = 'sequence'/>
            <p>Nom:</p>
            <input type = 'text' name = 'nom'/>
            <p>Prenom:</p>
            <input type = 'text' name = 'prenom'/>
            <p>Cours à échanger:</p>
            <input type = 'text' name = 'receivedCourse'/>
            <p>Cours souhaité:</p>
            <input type = 'text' name = 'wantedCourse'/>
            <p>Message:</p>
            <input type = 'text' name = 'message'/>
            <input type = 'submit'/>

            </form>
            <p>Salut</p>
            </div>

        
    )
}

export default AddAnnounce;