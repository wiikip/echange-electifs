import React, { Fragment } from "react";
import Announce from "../components/Announce"

function Board(props){
    return (
        <Fragment>
            <div className='card-deck'>
                <Announce sequence='ST2' postingDate='26/11/19' name='Maelle' receivedCourse='Observing Earth' wantedCourse='Propagation virale' message='Ca me sauverait la vie !' />
                <Announce sequence='ST2' postingDate='26/11/19' name='Maelle' receivedCourse='Observing Earth' wantedCourse='Propagation virale' message='Ca me sauverait la vie !' />
                <Announce sequence='ST2' postingDate='26/11/19' name='Maelle' receivedCourse='Observing Earth' wantedCourse='Propagation virale' message='Ca me sauverait la vie !' />
                <Announce sequence='ST2' postingDate='26/11/19' name='Maelle' receivedCourse='Observing Earth' wantedCourse='Propagation virale' message='Ca me sauverait la vie !' />
            </div>
        </Fragment>
    )
}


export default Board;