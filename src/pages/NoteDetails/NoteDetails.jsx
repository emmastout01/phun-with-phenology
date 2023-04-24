import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


function NoteDetails() {
    const dispatch = useDispatch();
    const note = useSelector(store => store.noteDetails)
    const { id } = useParams('id');
    // Will create a date in the following format: 'Wednesday, 4/19/23'
    const dateOptions = { weekday: 'long', month: 'numeric', day: '2-digit', year: '2-digit' }

    useEffect(() => {
        dispatch({
            type: 'FETCH_NOTE_DETAILS',
            payload: id
        });
    }, []);

    return (
        <div>
            <div><b>Date:</b> {new Date(note.date).toLocaleDateString('en-US', dateOptions)}</div>
            <div>
                <b>Location:</b> {note.location}
            </div>
            <div>
                <b>Notes:</b> {note.note_content}
            </div>
            <div><b>Birds seen:</b>
            {
                note.bird_notes?.length && note.bird_notes.map(birdNote => (
                    <div key={birdNote.bird_note_id}>
                        <div>
                            {birdNote.bird}
                        </div>
                        {birdNote.bird_photo && <img src={birdNote.bird_photo} height='200px' width='200px' />}
                        <div>
                            {birdNote.bird_note_content}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )

}

export default NoteDetails;