import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddNotePage() {
    const [date, setDate] = useState('');
    const [zipCode, setZipCode] = useState('55409');
    const dispatch = useDispatch();
    const weather = useSelector(store => store.weather);
    const weatherData = weather.forecast ? weather.forecast.forecastday[0].day : null;
    const weatherLocation = weather.location ? weather.location.name : null;

    // Upon changing the date, display the weather for that date in the zip code where your walk happened
    // EMMA TODO set zip code too
    const changeDate = (e) => {
        setDate(e.target.value)
        // get weather for specific date
        // Weather API will only get weather if date is within the last 7 days
        dispatch({
            type: 'FETCH_WEATHER_FOR_DATE',
            payload: {
                date: e.target.value,
                zipCode
            }
        })
    }

    return (
        <div>
            {/* Calendar input */}
            <input type='date' value={date} onChange={(e) => changeDate(e)} />
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