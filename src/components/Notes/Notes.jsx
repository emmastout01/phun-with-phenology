import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector(store => store.notes);

    useEffect(() => {
        dispatch({
            type: 'FETCH_NOTES'
        });
    }, []);

    console.log(notes);
    return (
        <div>
            {notes.length && notes.map(note => (
                <div key={note.id}>
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
                                <div>
                                    {birdNote.bird_note_content}
                                </div>
                            </div>
                        ))
                    }
                </div>
            ))}

        </div>
    );
}

export default Notes;
