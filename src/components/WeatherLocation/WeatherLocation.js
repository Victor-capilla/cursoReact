import React from 'react';
import WeatherData from './WeatherData/WeatherData'
import Location from './Location/Location';
import {CLOUD , SUN , CLOUDY , THUNDERSTORM, SNOW , RAIN} from '../../constans/weather.js'

const data = {
    temperature: 20,
    humedity: 20,
    weatherState:CLOUD,
    wind: '20km/h'
}
const WeatherLocation = () => (
    <div className="weatherLocationContent">
        <Location city={'buenos aires'}></Location>
        <WeatherData data={data}/>
    </div>
      
);


export default WeatherLocation;