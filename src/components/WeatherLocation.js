import React from 'react';
import WeatherData from './WeatherData'
import Location from './Location';

const WeatherLocation = () => (
    <div>
        <Location city="buenos aires"></Location>
        <WeatherData/>
    </div>
      
);

export default WeatherLocation;