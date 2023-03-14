import React, { useState } from 'react';

function Note(props) {
    const colors = ['#43919B','#BAD7E9', '#9DC08B', '#95BDFF', '#7DB9B6', '#E96479'];
    const randomColor = colors[Math.floor(Math.random()*6)];
    function deleteNote() {
        props.newNote(props.id);
        console.log(props.id)
    }
    const customStyle = {
        backgroundColor: randomColor 
    };
    return (
        <>
            <li id={props.id}  className="max-w-sm min-w-[208px] w-fit h-fit bg-slate-500 mx-8  rounded-[30px] p-4 my-10 hover:shadow-2xl transition-all" style={customStyle}>
            <div  id="head" className='text-base cursor-default font-semibold font-mono text-slate-600 underline decoration-[#777] decoration-2 underline-offset-4'>{new Date().toLocaleDateString()}</div>
                <div id="body" className="text-lg text-slate-800 font-medium tracking-wide text-ellipsis overflow-hidden  min-w-[208px] min-h-[50px]  ml-4 my-3">{(props.content) === '' && <span>~</span>} {props.content}</div>
                <div id="foot" className="flex justify-end mx-2 px-2">
                    <div className="">
                        <button className="w-fit h-fit px-2 py-1 text-slate-600 font-mono rounded-full font-semibold hover:font-bold transition-all hover:shadow-2xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 outline outline-slate-600 outline-2" onClick={deleteNote}>Delete</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Note;
