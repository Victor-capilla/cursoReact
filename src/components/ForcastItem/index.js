import React, { useState } from 'react';
import PropTypes  from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData/WeatherData';

const ForecastItem = ({weekDay , forecastData}) => {


    return (
    <div>{ weekDay }
    <WeatherData data={forecastData}></WeatherData>
    </div>
    )
}


ForecastItem.propTypes = {
    city:PropTypes.string,
    weekDay:PropTypes.string,
    forecastData:PropTypes.func
}
export default ForecastItem;