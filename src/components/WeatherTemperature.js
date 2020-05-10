import React from 'react'
import WeatherIcons from 'react-weathericons'
import {CLOUD , SUN , CLOUDY , THUNDERSTORM, SNOW , RAIN} from '../constans/weather'
import  PropTypes  from 'prop-types'
checkPropTypes

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case CLOUDY:
            return "cloudy"
            break;
        case RAIN:
            return "rain"
            break;
        case SNOW:
            return "snow"
            break;
        case THUNDERSTORM:
            return "thunderstorm"
            break;
        case CLOUD:
            return "cloud"
            break;
        case SUN:
            return "day-sunny"
            break;    
        default:
            return "day-sunny"
            break;
    }
}
const WeatherTemperature = ({ temperature, weatherState }) => (

    <div>

        <span >{temperature} º <WeatherIcons name={getWeatherIcon(weatherState)} size="2px" /></span>
    </div>
)
WeatherTemperature.PropTypes= {
    temperature:PropTypes.number,
    weatherState:PropTypes.string
}
export default WeatherTemperature;