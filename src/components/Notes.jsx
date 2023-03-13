import React, { useState } from 'react';
import Note from './Note';
function Notes() {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');
    // function updateText(event) {
    // }
    // function updateNotes() {
    //     setNotes([...notes, noteText]);
    // }
    return (
        <>
            <h1 className="">Notes</h1>
        
            <input type="text" className="" onChange={(event)=>{setNoteText(event.target.value)}}/>
            <button className="" onClick={()=> {setNotes([...notes, noteText])}}>Submit</button>
            <ul className="">
                {notes.map((note)=>{
                    return (
                        <Note 
                            content = {note}
                            key = {note.id}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Notes;