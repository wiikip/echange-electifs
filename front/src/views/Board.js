import React, { Fragment , useEffect, useState} from "react";
import Announce from "../components/Announce"
const axios = require('axios');
const dateFormat = require('dateformat')
const nbperpage = 10

function Board(props){
    var [liste,setListe] = useState([])
    var [page,setPage] = useState(1)
    console.log(page)
    
    
    useEffect(() => {
        
        axios.post('/api/getListe',{page : page, user: props.user }).then(function(response){
// console.log(response.data)
// console.log(dateFormat(response.data[0]['created_at'],"dd/mm/yy"))
console.log(response.data)
if(liste !== response.data){
    setListe(response.data)
}


        }
        
        
        )
        
            
            

            
            
                
            
        
        

    },[page]);
    
     
            
        
    


    
    return (


        <Fragment>
            <br/>
            <br/>
            <div>
            
            <div className = 'row justify-content-center'>
                <div className = 'card-deck'>
            
            
                {liste.map((rowAnnounce)=> 
                <Announce sequence = {rowAnnounce['sgcréneau']} postingDate = {dateFormat(rowAnnounce['created_at'], "dddd, mmmm dS")} name = {rowAnnounce['auth_id']} receivedCourse={rowAnnounce['electif_source']} wantedCourse={rowAnnounce['electif_souhaité']} message={rowAnnounce['message']} fullName = {rowAnnounce['fullname']}/>)}
            
                </div>
             
             </div>
            
            
            <button onClick = {() => setPage(page - 1)}>Page précédente</button>
            <button onClick = {() => setPage(page + 1)}>Page suivante</button>
        <p>Page {page}</p>
             </div>
        </Fragment>
       
    )
}


export default Board;