import React, { Fragment , useEffect, useState} from "react";
import Announce from "../components/Announce"
const axios = require('axios');

function Board(props){
    var [liste,setListe] = useState([])
    var test = 'yoooo'
    
    useEffect(() => {
        console.log('yooo')
        axios.get('/api/getListe').then(function(response){

setListe(response.data)

        }
        
        
        )
        
            
            

            
            
                
            
        
        

    }, []);
    
     
            
        
    


    
    return (


        <Fragment>
            <p>Annonces</p>
            <div className='card-deck'>
                {liste.map(([sequence, postingDate, name, receivedCourse, wantedCourse, message])=> 
                <Announce sequence={sequence} postingDate={postingDate} name={name} receivedCourse={receivedCourse} wantedCourse={wantedCourse} message={message} />)} */}
                
            </div>
        </Fragment>
    )
}


export default Board;