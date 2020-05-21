import React from 'react';
import WeatherLocation from '../WeatherLocation'
import PropTypes  from 'prop-types';
import './LocationList.css'
const LocationList = ({cities ,onSelectedWeatherLocation}) => {
    const handleWeatherLocationClick = (city) => {
        onSelectedWeatherLocation(city);
    }
    const strToComponent =  cities => {
       return cities.map(city => (<WeatherLocation onWeatherLocationClick={() =>handleWeatherLocationClick(city)} key={city} city={city}></WeatherLocation>))
    }
    
    return(
    <div className="locationList">
       {strToComponent(cities)}
    </div>
    )
}


LocationList.propTypes= {
    cities:PropTypes.array.isRequired,
    onSelectedWeatherLocation:PropTypes.func
}
export default LocationList;