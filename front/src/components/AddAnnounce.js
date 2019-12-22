import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const Sequences = 
[
    {value: 'SG1' , label: 'Séquence générale 1'}, 
    {value: 'SG3' , label: 'Séquence générale 3'}, 
    {value: 'SG6' , label: 'Séquence générale 6'},
    {value: 'SG8' , label: 'Séquence générale 8'},
    {value: 'ST2' , label: 'Séquence thématique 2'},
    {value: 'ST4' , label: 'Séquence thématique 4'},
    {value: 'ST5' , label: 'Séquence thématique 5'},
    {value: 'ST7' , label: 'Séquence thématique 7'}
];

const Electifs1A =
[
    {value: 'Electromagnétisme', label: 'Electromagnétisme'},
    {value: 'Energie électrique', label: 'Energie électrique'},
    {value: 'Génie industriel', label: 'Génie industriel'},
    {value: 'Matériaux', label: 'Matériaux'},
    {value: 'Mécanique des milieux continus', label: 'Mécanique des milieux continus'},
    {value: 'Réseaux et sécurité', label: 'Réseaux et sécurité'},
    {value: 'Science des transferts', label: 'Science des transferts'},
    {value: 'Systèmes électroniques', label: 'Systèmes électroniques'},
    {value: 'T', label: 'Thermodynamique'},

]
const ST2 = 
[
    {value: 'Robotique médicale', label: 'Robotique médicale'},
    {value: 'Systèmes de télécommunication', label: 'Systèmes de télécommunication'},
    {value: 'Modélisation d\'intéractions stratégiques au travers des jeux', label: 'Modélisation d\'intéractions stratégiques au travers des jeux'},
    {value: 'Transition énergétique', label: 'Transition énergétique'},
    {value: 'Démarche intégrative de conception pour le développement de véhicules et d\'ouvrages', label: 'Démarche intégrative de conception pour le développement de véhicules et d\'ouvrages'},
    {value: 'Obersving the Earth', label: 'Obersving the Earth'},
    {value: 'Propagation Virale', label: 'Propagation Virale'},
    {value: 'Bioingénerie', label: 'Bioingénerie'}
]
// ...............
// const ST4 = 
// [
// ]
const cours = { 'ST2': ST2, 'SG1': Electifs1A, 'SG3': Electifs1A}
function Choix(){
    var [options, setOptions] = useState(cours['SG1']);
    
    var handleChange = (selectedOption) => {
        // console.log(selectedOption.target.value)
        // console.log(cours[selectedOption.target.value])
        setOptions(cours[selectedOption.target.value])
    }

    
    return(
    <div>
       
        <form method = 'POST' action = '/api/addToListe'>
        <ul className = 'list-group'><p>Sequence</p>
            <li className ='list-group-item'>
            <select name = 'sequence' onChange = {handleChange}>
            {Sequences.map((data) => 
            <option value = {data.value}>{data.label}</option>
            )}
            </select>
            </li>
            <li className ='list-group-item'>
                
                   
                        <p>Electif Reçu</p>
                        
                        <select name = 'receivedCourse'>
                        {options.map((data) =>
                        <option value = {data.value}> {data.label} </option>
                        )}
                        </select>
                    </li>
                    <li className ='list-group-item'>
                        <p>Electif(s) souhaité(s)</p>
                        <select name = 'wantedCourse' multiple>
                        {options.map((data) =>
                        <option value = {data.value}> {data.label} </option>
                        )}
                        </select>
                    </li>
                    <li className ='list-group-item'>
                        <p>Message:<input name = 'message' type = 'textarea'></input></p>


                    </li>
            
            
        </ul>
    
    <input type = 'submit'/>
    </form>
    </div>
    
    
    
    
    )








}

function AddAnnounce(props){

    useEffect(()=> console.log())
    
    return(
        <div>
            {/* <form method = 'POST' action = '/api/addToListe'>
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

            </form> */}
            
            
            <Choix/>
            
            
            </div>

        
    )
}

export default AddAnnounce;