import React, { Fragment , useEffect, useState} from "react";
import Announce from "../components/Announce"
const axios = require('axios');
const dateFormat = require('dateformat')

function Board(props){
    var [liste,setListe] = useState([])
    var test = 'yoooo'
    
    useEffect(() => {
        console.log('yooo')
        axios.get('/api/getListe').then(function(response){
// console.log(response.data)
// console.log(dateFormat(response.data[0]['created_at'],"dd/mm/yy"))
console.log(response.data[0])
setListe(response.data)

        }
        
        
        )
        
            
            

            
            
                
            
        
        

    }, []);
    
     
            
        
    


    
    return (


        <Fragment>
            <p>Annonces</p>
            <div className='card-deck'>
                {liste.map((rowAnnounce)=> 
                <Announce sequence = {rowAnnounce['sgcréneau']} postingDate = {dateFormat(rowAnnounce['created_at'], "dddd, mmmm dS")} name = {rowAnnounce['auth_id']} receivedCourse={rowAnnounce['electif_source']} wantedCourse={rowAnnounce['electif_souhaité']} message={rowAnnounce['message']} />)} */}
                
             </div>
        </Fragment>
    )
}


export default Board;