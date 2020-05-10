import React from 'react'
import WeatherIcons from 'react-weathericons'

const WeatherExtraInfo = ({humedad , wind}) => (
    <div>
        <span>{`humedity :  ${humedad}     `} <WeatherIcons name="humidity" size="2px"/> - |</span>    
        <span>{` wind : ${wind} `}<WeatherIcons name="cloudy-windy" size="2px"/></span>
    </div>
)

export default WeatherExtraInfo;