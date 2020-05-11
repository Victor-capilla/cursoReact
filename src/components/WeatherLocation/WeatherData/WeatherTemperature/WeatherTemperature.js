import React from 'react'
import WeatherIcons from 'react-weathericons'
import {CLOUD , SUN , CLOUDY , THUNDERSTORM, SNOW , RAIN} from '../../../../constans/weather'
import  PropTypes  from 'prop-types'
import '../WeatherLocation.css'

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

    <div className="WeatherTemperature">
        <WeatherIcons className='wicon' name={getWeatherIcon(weatherState)} size="2x" />
        <span className="Temperature" >{temperature}</span>
        <span className="TemperatureType" > C º</span>
    </div>
)
//proptypes se utiliza para darle tipado a los atributos de nuestro componente. 
//en typescript seria similar a  /: temperature : number ;
WeatherTemperature.propTypes= {
    temperature:PropTypes.number,
    weatherState:PropTypes.string
}
export default WeatherTemperature;