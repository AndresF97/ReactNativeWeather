import React from "react"
import {View, StyleSheet} from "react-native"
import CurrentWeather from "./src/components/currentWeather"
import UpComingWeather from "./src/components/UpComingWeather"


const App = () =>{
 return (
  <View style={styles.container}>
    {/* <CurrentWeather/> */}
    <UpComingWeather/>
  </View>
 )
}

const styles =  StyleSheet.create({
  container :{
    flex:1
  }
})
export default App;