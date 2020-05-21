import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/WeatherLocation/Location/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper,AppBar } from 'material-ui';
import ForecastExtended from './components/WeatherLocation/ForecastExtended';

const cities = [
  'Madrid',
  'Buenos Aires',
  'Tarifa',
  'Berlin'
]
class App extends Component {
  constructor(){
    super();
    this.state ={
      city : null,
    }
  }
  handleSelectionLocation = city => {
   this.setState({city});
   console.log(city);

  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12}><AppBar>WeatherApp</AppBar></Col>
         </Row>
          <Row>
            <Col xs={12} md={6}>
                <LocationList
                 onSelectedWeatherLocation={this.handleSelectionLocation}
                  cities={cities}>
                  </LocationList>
            </Col>
            <Col  xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="detail">
                {
                  this.state.city ?
                  <ForecastExtended city={this.state.city}></ForecastExtended> :
                  <h1>no has elegido ninguna ciudad TRUAN</h1> 
                }
              
              </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
