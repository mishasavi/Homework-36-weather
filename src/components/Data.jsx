import {useState} from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {API_KEY, BASE_URL} from "../utils/constants.js";


const Data = () => {
    const [weatherInfo,updateWeather] = useState({});
    const [message, updateMessage] = useState("Enter city name");

    const getWeather =(city)=>{
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response=> response.json())
            .then(data => {
                updateWeather(
                    {

                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure
                    });
                updateMessage(null)
                })
            .catch(e=>console.log(e))
    }


        return (
            <div>
                <Form getWeather={getWeather}/>
                <Weather message={message} weatherInfo={weatherInfo}/>
            </div>
        );

}

export default Data;