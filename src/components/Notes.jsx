import React, { useState } from 'react';
import Note from './Note';
function Notes() {
    const [notes, setNotes] = useState([]);
    let newNote;
    const [noteText, setNoteText] = useState('');
    // function updateText(event) {
    // }
    // function updateNotes() {
    //     setNotes([...notes, noteText]);
    // }
    function updateNotes(index) {
        setNotes(notes.filter((note,noteIndex)=>{
            return noteIndex != index;
        }));
    }
    return (
        <>
            <a href='/' className="font-bold text-5xl hover:shadow-2xl w-fit p-2 text-teal-500 hover:text-teal-600 transition-all rounded-xl">Notes</a>
            <div className=' flex mx-40 mt-10 mb-3 '>
                <input type="text" className="min-w-[900px] max-w-5xl w-fit h-fit min-h-[33px] rounded-full px-6 text-lg tracking-wide mr-5 py-1  bg-slate-200 caret-slate-600 focus:bg-slate-100 transition-all" minLength='20' maxLength='400' placeholder='Please Note Here :)'  onChange={(event)=>{setNoteText(event.target.value)}}/>
                <button type='submit' className="w-fit h-fit px-2 py-1 text-slate-600 font-mono rounded-full font-semibold text-lg hover:font-bold transition-all hover:shadow-2xl hover:shadow-slate-200 hover:text-slate-200 hover:bg-slate-600 border-slate-600 border-2" onClick={()=> {setNotes([...notes, noteText])}}>Submit</button>
            </div>
            <p className='mx-40 px-3 text-slate-500 tracking-wide'>Max letters : 400</p>
            <ul className="flex flex-wrap items-center mt-5 transition-all">
                {notes.map((note, index)=>{
                    return (
                        <Note 
                            notes = {notes}
                            content = {note}
                            key = {index}
                            id = {index}
                            newNote = {updateNotes}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Notes;
