import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import ForecastItem from '../ForcastItem';
import transformWeather from '../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress/CircularProgress';


    const days = [
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes'
    ]
class ForecastExtended extends Component{
    constructor({city}){
        super()
        this.state = {
            forecastData:null
        }
    }
    componentDidMount(){
        const {city} = this.props;
        if (city) {
            console.log(city)
            const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=483f68ba5315c926895522ef49622fee`;

        fetch(api)
        .then((data)=>
            { console.log(data); return data.json()}
            )
        .then((wathder_data) =>{
            console.log(wathder_data);
       this.setState({
           forecastData:transformWeather(wathder_data)
       })
    })
        .catch(e => console.log('error ' + e.errorr))
        }
        
    }

    renderForecastItemDays(){
        return days.map(day => <ForecastItem key={day} weekDay={day} forecastData={this.state.forecastData} ></ForecastItem>);
    }
    render() {
        const {city} =this.props;
        const {forecastData} = this.state;
        return(
            <div className="ForecastExtended"> 
                <h1>{city}</h1>
                {forecastData ?this.renderForecastItemDays() :<CircularProgress />}
            </div>
        )

    }

    
}
ForecastExtended.propTypes={
    city:PropTypes.string
}
export default ForecastExtended;
