import React, { Fragment } from "react";
import Announce from "../components/Announce"

function Board(props){
    return (
        <Fragment>
            <div className='card-deck'>
                {props.listAnnounce.map(([sequence, postingDate, name, receivedCourse, wantedCourse, message])=> 
                <Announce sequence={sequence} postingDate={postingDate} name={name} receivedCourse={receivedCourse} wantedCourse={wantedCourse} message={message} />)}
                
            </div>
        </Fragment>
    )
}


export default Board;