import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function NotesList() {
    const dispatch = useDispatch();
    const notes = useSelector(store => store.notes);
    const history = useHistory();
    // Will create a date in the following format: 'Wednesday, 4/19/23'
    const dateOptions = { weekday: 'long', month: 'numeric', day: '2-digit', year: '2-digit' }

    useEffect(() => {
        dispatch({
            type: 'FETCH_NOTES'
        });
    }, []);

    const viewNoteDetails = (noteId) => {
        history.push(`/note/${noteId}`)
    }

    const viewAddNotePage = () => {
        history.push('/note/create');
    }
    
    return (
        <div>
            <h2>Your notes</h2>
            <button onClick={viewAddNotePage}>New note</button>
            <table className='noteTable'>
                <thead>
                    <th>Date</th>
                    <th>Weather</th>
                    <th>Location</th>
                </thead>
                <tbody>

                    {notes.length && notes.map(note => (
                        <tr key={note.id} >
                            <td>{new Date(note.date).toLocaleDateString('en-US', dateOptions)}</td>
                            <td>High 45, Low 38</td>
                            <td>{note.location}</td>
                            <td><button onClick={() => viewNoteDetails(note.id)}>View note</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NotesList;
