import React, { useState, useEffect } from "react";
import Select from "react-select";
import useGetUserName from "../hooks/GetUserName"
import Cookies from 'universal-cookie';
var controller = require('../controller')
const axios = require('axios');
const session = new Cookies();


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
    {value: 'Thermodynamique', label: 'Thermodynamique'},

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
const cours = { 'ST2': ST2, 'SG1': Electifs1A, 'SG3': Electifs1A}
function Message(props){
    const [msg, setMessage] = useState(props.default);

    var handleChange = (event) => {
        
        setMessage(event.target.value);
        props.updateParent('msg',event.target.value);
    }

    return(
        <div>
        <label>Message</label>
        <textarea placeholder = "Entrez un petit message" value = {props.msg} onChange = {handleChange} />
}
        </div>
    )
}

function Form(props){
    const [msg,setMsg] = useState(null);
    const [wEl,setwEl] = useState(null);
    const [rEl,setRel] = useState(null);
    const [seq,setSeq] = useState({});
    useGetUserName();
    const user = session.get('user')
    const logged = session.get('logged')

    const setInfo = {
        'msg' : setMsg,
        'wEl' : setwEl,
        'rEl' : setRel,
        'seq' : setSeq
    };
    

    var updateParent = (key, val) => {
        
       
        
        setInfo[key](val);
        
    }
    var handleSubmit = () =>
    {

        console.log(wEl, rEl, seq, msg)
        if (logged === 'true'){
            if (wEl && rEl && seq) {
            // axios.post('/api/addToListe', {authId: user.login, fullName: user.firstName + " " + user.lastName, wantedCourse : wEl, receivedCourse : rEl.value, sequence : seq.value, message : msg}).then(function(response){
            try{
                controller.announce.addAnnounce(user.login, user.firstName + ' ' + user.lastName, wEl, rEl.value, seq.value, msg);
                alert('Annonce postée avec succès')
                setMsg('');
                setwEl(null);
                setRel(null);
                setSeq({});
            }catch{
                alert('Oops! Recommence stps')
                }
            }
            else{
                alert('Il faut remplir tous les champs mec')
            }
        }
        else{
            alert("Connecte toi d\'abord")
        }



}
    return (
        <div>
        
        <Sequence updateParent = {updateParent} seq = {seq}/>
        <ReceivedElectif updateParent = {updateParent} rEl = {rEl} cours = {cours[seq.value]}/>
        <WantedElectif updateParent = {updateParent} wEl = {wEl} cours = {cours[seq.value]}/>
        <Message updateParent = {updateParent} msg = {msg}/>
        <button onClick = {handleSubmit}> Ajouter l'annonce </button>

        </div>





    )



}
function Sequence(props){
    const [seq, setSeq] = useState(null)

    var handleChange = (event) => {

        
        setSeq(event)
        props.updateParent('seq', event)
        
    }

    return(
        <div>
            <Select  options = {Sequences} onChange = {handleChange} value = {props.seq}/>



        </div>



    )
    }
    function ReceivedElectif(props){
        const [rEl, setReceivedEl] = useState(null)
    
        var handleChange = (event) => {
    
            
            setReceivedEl(event)
            props.updateParent('rEl', event)
        }
    
        return(
            <div>
                <Select  options = {props.cours} onChange = {handleChange} value = {props.rEl}/>
    
    
    
            </div>
    
    
    
        )
        }
    function WantedElectif(props){
        const [wantedEl , setWantedEl] = useState(null)
    
        var handleChange = (event) => {
    
            
            setWantedEl(event)
            props.updateParent('wEl', event)
        }
    
        return(
            <div>
                <Select isMulti options = {props.cours} onChange = {handleChange} value = {props.wEl}/>
    
    
    
            </div>
    
    
    
        )











};
export default Form;