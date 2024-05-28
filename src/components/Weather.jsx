
const Weather = ({message,weatherInfo}) => {

    return (
        <div>
            <p>City: {weatherInfo.city} </p>
            <p>Country: {weatherInfo.country}</p>
            <p>Temp: {weatherInfo.temp}</p>
            <p>Pressure: {weatherInfo.pressure}</p>
            <p>{message}</p>
        </div>
    );
};

export default Weather;