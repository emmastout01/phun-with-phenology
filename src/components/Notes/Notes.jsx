import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector(store => store.notes);

    useEffect(() => {
        dispatch({
            type: 'FETCH_NOTES'
        });
    }, []);

    return (
        <div>
            {notes.length && notes.map(note => (
                <div>
                    <div>
                        {note.location}
                    </div>
                    <div>
                        {note.note_content}
                    </div>
               
                </div>
            ))}

        </div>
    );
}

export default Notes;
