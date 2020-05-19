import convert from 'convert-units';
import { SUN, THUNDERSTORM, DRIZZLE, RAIN, SNOW, CLOUDY } from '../constans/weather.js'

const getWeatherState = weather => {
    debugger;
    const {id} =weather;
    if (id === 800) {
        return SUN;
    }else if(id<300){
        return THUNDERSTORM;
    }
    else if(id<400){
        return DRIZZLE;
    }
    else if(id<600){
        return RAIN;
    }
    else if(id<700){
        return SNOW;
    }
    else {
        return CLOUDY;
    }
 
}
const getTemperature = kelvin => {
    debugger;
    return convert(kelvin).from('K').to('C').toFixed(2);
}
const transformWeather = (weather_data) => {
    debugger;
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0])
    const data = {
        humedity: humidity,
        temperature: getTemperature(temp),
        wind: speed + "km/h",
        weatherState:weatherState
   }
    return data;
}
export default transformWeather;