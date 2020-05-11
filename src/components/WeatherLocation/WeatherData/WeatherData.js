import React from 'react';
import WeatherTemperature from './WeatherTemperature/WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo/WeatherExtraInfo';
import  PropTypes, { number }  from 'prop-types'

import './WeatherLocation.css'


const WeatherData = ({data}) =>{
  const {temperature, weatherState, humedity, wind} = data;
  return(
    <div className="WeatherDataContent">
      <WeatherTemperature className="WeatherTemperature" temperature={temperature} weatherState={weatherState}></WeatherTemperature>
      <WeatherExtraInfo class="WeatherExtraInfo" humedity={humedity} wind={wind}/> 
    </div>
   ) 
}
WeatherData.propTypes ={
  data: PropTypes.shape({
    temperature:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
    weatherState:PropTypes.string.isRequired,
    humedity:PropTypes.number.isRequired
  }),
}
export default WeatherData;