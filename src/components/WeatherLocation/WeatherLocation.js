import React ,{Component} from 'react';
import WeatherData from './WeatherData/WeatherData';
import convert from 'convert-units'
import Location from './Location/Location';
import transformWeather from '../../services/transformWeather' 
import {CLOUD , SUN , CLOUDY , THUNDERSTORM, SNOW , RAIN} from '../../constans/weather.js'
const api = `http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=483f68ba5315c926895522ef49622fee`;
const data = {
    temperature: 20,
    humedity: 20,
    weatherState:CLOUD,
    wind: '20km/h'
}

const data1 = {
    temperature: 20,
    humedity: 20,
    weatherState:SUN,
    wind: '10km/h'
}
class WeatherLocation extends Component{ 
    constructor(){
        super();
        this.state={
            city:'buenos aires',
            data:data
        }
    }
    
    componentWillMount() {
        this.hadleUpdateClick();
    }
    
    
    hadleUpdateClick =() => {
     fetch(api)
     .then((data)=>{ console.log(data); return data.json()})
     .then((wathder_data) =>{console.log(wathder_data);
    this.setState({
        city : wathder_data.name,
        data:transformWeather(wathder_data)
    })})
     .catch(e => console.log('error ' + e.errorr));
    }
    render =() => {
    return(
    <div className="weatherLocationContent">
        <Location city={this.state.city}></Location>
        <WeatherData data={this.state.data}/>
        <button onClick={this.hadleUpdateClick}>Actualizar</button>
    </div>)}
}



export default WeatherLocation;