import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD , SUN , CLOUDY , THUNDERSTORM, SNOW , RAIN} from '../constans/weather'



const WeatherData = () => (
    <div>
      <WeatherTemperature temperature={20} weatherState={CLOUDY}></WeatherTemperature>
      <WeatherExtraInfo humedad={80} wind={'20km/h'}/> 
    </div>
)

export default WeatherData;