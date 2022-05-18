import './App.css';
import { useState } from "react";
//import {useEffect} from "react";

import Axios from "axios";

function App() {

    //const [locationName, setLocationName] = useState("");
    //const buildLocationString = event => {setLocationName(event.target.value);}
    let [responseData, setResponseData] = useState("");
    let content = null;

    //const url = 'https://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=099b9659a9ceb597aefe07a299faf959';

    const [locName, setLocName] = useState("");

    const buildInput = event => {
        setLocName(event.target.value);
    }

    const useValue = () => {
        console.log('https://api.openweathermap.org/data/2.5/weather?q=' + locName + '&APPID=099b9659a9ceb597aefe07a299faf959&units=metric');
        Axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + locName + '&APPID=099b9659a9ceb597aefe07a299faf959&units=metric')
            .then(response => {
                setResponseData(response.data)
            });
        console.log(responseData);
    }

    //Use useEffect to only run when the url changes...
    /*   useEffect(() => {
     Axios.get(url)
     .then(res => {
         setWeatherData(res.data)
       })
    },[url]) */

    if (responseData) {
        return (
            content = (
                <>
                    <div className="App">
                        <h1>The Weather App v0.1</h1>
                    </div>

                    <div className="div">
                        <label className="label"> Please enter town and country. </label>
                    </div>

                    <div className="div">
                        <input onChange={buildInput} placeholder="For example Peterborough, uk" className="input"></input>
                    </div>

                    <div className="div">
                        <button onClick={useValue} className="button">Search</button>
                    </div>

                    <div className="div">
                        <h3>The weather in {responseData.name} is currently:</h3>
                        <h3>Current temperature: {responseData.main.temp}</h3>
                        <h3>Maximum temperature: {responseData.main.temp_max}</h3>
                        <h3>Minimum temperature: {responseData.main.temp_min}</h3>
                        <h3>Pressure: {responseData.main.pressure}</h3>
                        <h3>Humidity: {responseData.main.humidity}%</h3>
                        <h3>Sunrise: {responseData.sys.sunrise}</h3>
                        <h3>Sunset: {responseData.sys.sunset}</h3>
                    </div>
                </>
            )
        )
    } else {
        return (
            content = (
                <>
                    <div className="App">
                        <h1>The Weather App v0.1</h1>
                    </div>

                    <div className="div">
                        <label className="label"> Please enter town and country: </label>
                    </div>

                    <div className="div">
                        <input onChange={buildInput} placeholder="For example Peterborough, uk" className="input"></input>
                    </div>

                    <div className="div">
                        <button onClick={useValue} className="button">Search</button>
                    </div>
                </>
            )
        );
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default App;
