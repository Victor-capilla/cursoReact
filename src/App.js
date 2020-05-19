import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LocationList from './components/WeatherLocation/Location/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper,AppBar } from 'material-ui';
const cities = [
  'Madrid',
  'Buenos Aires',
  'Tarifa',
  'Berlin'
]
class App extends Component {
  handleSelectionLocation = city => {
    console.log(`hadleSelectedLocation ${city}`)

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
              <div className="detail"></div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
