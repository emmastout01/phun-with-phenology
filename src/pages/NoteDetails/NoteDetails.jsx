import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


function NoteDetails() {
    const dispatch = useDispatch();
    const note = useSelector(store => store.noteDetails)
    const { id } = useParams('id');

    useEffect(() => {
        dispatch({
            type: 'FETCH_NOTE_DETAILS',
            payload: id
        });
    }, []);

    return (
        <div>
            <div>
                {note.location}
            </div>
            <div>
                {note.note_content}
            </div>
            {
                note.bird_notes?.length && note.bird_notes.map(birdNote => (
                    <div key={birdNote.bird_note_id}>
                        <div>
                            {birdNote.bird}
                        </div>
                        <img src={birdNote.bird_photo} height='300px' width='300px' />
                        <div>
                            {birdNote.bird_note_content}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default NoteDetails;