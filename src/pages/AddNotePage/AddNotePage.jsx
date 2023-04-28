import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddNotePage() {
    const [date, setDate] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');
    const [birdNotes, setBirdNotes] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const weather = useSelector(store => store.weather);
    const weatherData = weather.forecast ? weather.forecast.forecastday[0].day : null;
    const weatherLocation = weather.location ? weather.location.name : null;
    const userId = useSelector(store => store.user.id);
    const birds = useSelector(store => store.birds);

    useEffect(() => {
        dispatch({
            type: 'FETCH_BIRDS'
        })
    }, []);

    useEffect(() => {
        // Upon changing the date or zip code, 
        // display the weather for that date in the zip code where your walk happened
        // Weather API will only get weather if date is within the last 7 days
        if (date && zipCode.length === 5) {
            dispatch({
                type: 'FETCH_WEATHER_FOR_DATE',
                payload: {
                    date,
                    zipCode
                }
            })
        }
    }, [date, zipCode])

    const addNote = () => {
        dispatch({
            type: 'ADD_NOTE',
            payload: {
                userId,
                date,
                time,
                location,
                weatherHigh: weatherData?.maxtemp_f ?? '',
                weatherLow: weatherData?.mintemp_f ?? '',
                weatherConditionText: weatherData?.condition?.text ?? '',
                weatherConditionImage: weatherData?.condition?.icon ?? '',
                birdNotes,
                content
            }
        });
        history.push('/');
    }

    const addBirdNote = () => {
        // EMMA TODO make this dynamic data
        setBirdNotes([...birdNotes, { bird_id: '1', content: 'bird note content' }]);
    }

    return (
        <div>
            <input type='text' placeholder='Zip code' value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            {/* Calendar input */}
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            {/* Display weather data if it is available */}
            {weatherData && (
                <div>
                    <div>Weather for {date} in {weatherLocation}</div>
                    <div>High: {weatherData.maxtemp_f}</div>
                    <div>Low: {weatherData.mintemp_f}</div>
                    <div>Conditions: {weatherData.condition.text}</div>
                    <img src={weatherData.condition.icon} alt={weatherData.condition.text} />
                </div>
            )}
            <input type='text' placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} />
            <input type='text' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} />
            <textarea placeholder='Notes' value={content} onChange={(e) => setContent(e.target.value)} rows="10" cols="50" />
            {
                birds.length && birds.map(bird => (
                    <>
                        <p>{bird.name}</p>
                        <img width='100px' height='100px' src={bird.photo} />
                    </>
                ))
            }
            <button onClick={addNote}>Add Entry</button>
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