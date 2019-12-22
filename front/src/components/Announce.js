import React from 'react';

function Announce(props) {
    
    return(
        <div className='card bg-light' style={{ width: '18rem' }}>
            <div className='card-header text-left'>
                {props.sequence}
                <span style={{float:'right'}}>{props.postingDate}</span>
            </div>
            <div className='card-body text-left'>
                <div className='card-title'>
                    {props.name} offre <strong>{props.receivedCourse}</strong> et souhaite: 
                        <ul className = 'list-group'>{props.wantedCourse[0].map((course) => <li><strong>{course}</strong></li>

                        )}
                        </ul>
                       
                </div>
                <div className='card-text'>{props.message}</div>
                <a href='#'>
                    <button className="btn btn-primary">LinkCS</button>
                </a>
            </div>
        </div>
    )
}
  
  
export default Announce;

