import React, { Fragment , useEffect, useState} from "react";
import Announce from "../components/Announce"
import useGetUserName from "../hooks/GetUserName";
const axios = require('axios');
const dateFormat = require('dateformat')
const nbperpage = 10

function Board(props){
    var [liste,setListe] = useState([])
    var [numberAds, setNumberAds] = useState(0)
    var [page,setPage] = useState(1)
    var user = useGetUserName()
    console.log(user)
    
    
    useEffect(() => {
        
        axios.post('/api/getListe',{page : page, user: props.user }).then(function(response){
// console.log(response.data)
// console.log(dateFormat(response.data[0]['created_at'],"dd/mm/yy"))
console.log(response.data)
if(liste !== response.data){
    setListe(response.data)
    setNumberAds(liste.length)
}



        }
        
        
        )
            

            
            
                
            
        
        

    },[page]);
    
     
            
        
    


    
    return (
        user ?
        user.logged === false ?
        <p> Connecte toi d'abord :)</p> :

         <Fragment>
            <br/>
            <br/>
            <div>
            
            <div className = 'row justify-content-center'>
                <div className = 'card-deck'>
            
            
                {liste.map((rowAnnounce)=> 
                <Announce id = {rowAnnounce['id']} sequence = {rowAnnounce['sgcréneau']} postingDate = {dateFormat(rowAnnounce['created_at'], "dddd, mmmm dS")} name = {rowAnnounce['auth_id']} receivedCourse={rowAnnounce['electif_source']} wantedCourse={rowAnnounce['electif_souhaité']} message={rowAnnounce['message']} fullName = {rowAnnounce['fullname']} canDelete = {user.login === rowAnnounce['auth_id']}/>)}
            
                </div>
             
             </div>
            
            
            <button onClick = {() => setPage(page - 1)}>Page précédente</button>
            <button onClick = {() => setPage(page + 1)}>Page suivante</button>
        <p>Page {page} pour {numberAds} annonces</p>
             </div>
        </Fragment> : <p>Loading</p>
       
    )
}


export default Board;