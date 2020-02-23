import React from 'react';
import useGetUserName from '../hooks/GetUserName';

const controller = require('../controller')

function Announce(props) {
    var user = useGetUserName()

    function handleDelete(id){
        if ( user.login === props.name ){
            controller.announce.deleteAnnounce(id)
        }
        
        alert('Annonce bien suprimée')
        window.location.reload()
    }
    
    return(
        <div className = 'col-4-auto'>
        
        <div className='card h-100' style = {{ width :'18rem'}}>
            <div>
            <div className='card-header text-left'>
                {props.sequence}
                <span style={{float:'right'}}>{props.postingDate}</span>
            </div>
            <div className='card-body text-left'>
                <div className='card-text'>
                    {props.fullName} offre <strong>{props.receivedCourse}</strong> et souhaite: 
                        <ul className = 'list-group'>{props.wantedCourse.map((course) => <li><strong>{course}</strong></li>

                        )}
                        </ul>
                       
                </div>
                <div className='card-text'>{props.message}</div>
                <a href={'https://linkcs.fr/user/' + props.name}>
                    <button className="btn btn-primary">LinkCS</button>
                </a>
                {props.canDelete ? <button onClick = {() => handleDelete(props.id)}> Supprimer</button>: <p></p>}
            </div>
            </div>
        </div>
        
        </div>
    )
}
  
  
export default Announce;

