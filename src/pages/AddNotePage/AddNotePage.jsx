 import { useState, useEffect } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { useHistory } from 'react-router-dom';
 
 function AddNotePage() {
    const [date, setDate] = useState('');
    const [zipCode, setZipCode] = useState('55409');
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weather);

    const changeDate = (e) => {
        setDate(e.target.value)
        // get weather for specific date
        // For history API 'dt' should be on or after 1st Jan, 2010 in yyyy-MM-dd format (i.e. dt=2010-01-01)
        dispatch({
            type: 'FETCH_WEATHER_FOR_DATE',
            payload: {
                date: e.target.value,
                zipCode 
            }
        })
    } 

    // Calendar input
    return (
        <div>
            <input type='date' value={date}  onChange={(e) => changeDate(e)} />
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