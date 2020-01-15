import React from 'react';

function Announce(props) {
    
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
                    {props.name} offre <strong>{props.receivedCourse}</strong> et souhaite: 
                        <ul className = 'list-group'>{props.wantedCourse.map((course) => <li><strong>{course}</strong></li>

                        )}
                        </ul>
                       
                </div>
                <div className='card-text'>{props.message}</div>
                <a href='#'>
                    <button className="btn btn-primary">LinkCS</button>
                </a>
            </div>
            </div>
        </div>
        
        </div>
    )
}
  
  
export default Announce;

