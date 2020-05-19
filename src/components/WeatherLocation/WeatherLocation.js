import React ,{Component} from 'react';
import WeatherData from './WeatherData/WeatherData';
import Location from './Location/Location';
import transformWeather from '../../services/transformWeather' 
import CircularProgress from 'material-ui/CircularProgress'
import {CLOUD ,SUN} from '../../constans/weather.js'
import  PropTypes  from 'prop-types';

// const data = {
//     temperature: 20,
//     humedity: 20,
//     weatherState:CLOUD,
//     wind: '20km/h'
// }


// const data1 = {
//     temperature: 20,
//     humedity: 20,
//     weatherState:SUN,
//     wind: '10km/h'
// }
class WeatherLocation extends Component{ 
    constructor({city}){
        console.log("constructor");
        super();
        this.state={
            city:city,
            data:null
        }
    }
    
    componentWillMount() {
        
        console.log("cwm");
        this.hadleUpdateClick();
    }
    
    
    hadleUpdateClick =() => {
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=483f68ba5315c926895522ef49622fee`;

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
        const {onWeatherLocationClick}= this.props;
        console.log("render");
    return(
    <div className="weatherLocationContent" onClick={onWeatherLocationClick}>
        <Location city={this.state.city}></Location>
       {!this.state.data?<CircularProgress />:<WeatherData data={this.state.data}/>}
        <button onClick={this.hadleUpdateClick}>Actualizar</button>
    </div>)}
}


WeatherLocation.propTypes= {
    city:PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}
export default WeatherLocation;