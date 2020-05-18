import convert from 'convert-units';
import {SUN} from '../constans/weather.js'

const getWeatherState= weather =>{
    return SUN;
}
const getTemperature= kelvin => {
    debugger;
  return  convert(kelvin).from('K').to('C').toFixed(2);
}
const transformWeather = (weather_data) =>{
    debugger;
   const{humidity, temp} = weather_data.main;
   const{speed} = weather_data.wind;
   const weatherState =getWeatherState(weather_data.weather[0])
   const data = {
       humedity:humidity,
       temperature:getTemperature(temp),
       wind: speed+"km/h",
       weatherState:weatherState
   }
   return data;
}
export default transformWeather;