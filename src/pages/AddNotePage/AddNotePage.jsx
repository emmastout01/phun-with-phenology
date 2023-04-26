 import { useState, useEffect } from 'react';
 
 function AddNotePage() {
    const [date, setDate] = useState('');

    // Calendar input
    return (
        <div>
            <input type='date' value={date}  onChange={() => setDate(e.target.value)} />
            Add note page
        </div>
    )
    

 }

 export default AddNotePage;
 
 
 
 
 
 
 
 /*
 Data should be in this format:

 {
    "userId": "1",
    "date": "2023-04-22",
    "time": "1pm",
    "location": "Around Kingfield",
    "content": "Saw a northern flicker out on my daily neighborhood walk!",
    "birdNotes": [
        {
            "bird_id": 16,
            "content": "saw a beautiful"
        },
         {
            "bird_id": 28,
            "content": "saw a test bird"
        }
    ]
}
 */