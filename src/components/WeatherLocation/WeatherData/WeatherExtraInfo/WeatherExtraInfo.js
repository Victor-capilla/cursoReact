import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes  from 'prop-types';
import '../WeatherLocation.css'

const WeatherExtraInfo = ({humedity , wind}) => (
    <div className="WeatherExtraInfo">
        <span className="extraInfoText">{`humedity :  ${humedity}     `} <WeatherIcons name="humidity" size="2px"/></span>    
        <span className="extraInfoText">{` wind : ${wind} `}<WeatherIcons name="cloudy-windy" size="2px"/></span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humedity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;