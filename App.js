import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './app/Weather'


const API_KEY="22311e502c806cad29e0d50548d80fb6"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded : false

    }

  }
  componentDidMount(){
    this._getWeather()
  }
  _getWeather = async()=>{
    const _response=await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=35&lon139&APPID=${API_KEY}&units=metric`)
    const _json=await _response.json()
    this.setState({isLoaded: true, temp: Math.floor(_json.main.temp),title: _json.weather[0].main,})
  }
  
  render() {
    return (
      console.log(this.state),
      <View style={styles.container}>
        {this.setState.isLoaded? <Weather temp={this.state.temp} title={this.state.title}/> : <ActivityIndicator style={styles.indicator}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  indicator:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  }
});
