import React from 'react';

function Note(props) {
    return (
        <>
            <li id={props.id} className="">
                <div id="head" className=""></div>
                <div id="body" className="">{props.content}</div>
                <div id="foot" className=""></div>
            </li>
        </>
    );
}

export default Note;