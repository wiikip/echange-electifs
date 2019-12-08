import React, { Fragment , useEffect, useState} from "react";
import Announce from "../components/Announce"


function Board(props){
    var [liste,setListe] = useState([])
    var test = 'yoooo'
    
    useEffect(() => {
        console.log('yooo')
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/getListe');
        xhr.responseType = 'json';
        xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log('yolo');
            console.log(xhr.response);
            var listeAnnounce = []
            xhr.response.forEach(annonce => {
                var ann = []
                ann.push(annonce["sequence"])
                ann.push(annonce["postingDate"])
                ann.push(annonce["name"])
                ann.push(annonce["receivedCourse"])
                ann.push(annonce["wantedCourse"])
                ann.push(annonce["message"])
               listeAnnounce.push(ann)

                
            });
          
            setListe(listeAnnounce)
            
            

            
            
                
            }
        };
        xhr.send(null)

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