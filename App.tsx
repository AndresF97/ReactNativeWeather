import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"



const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Icon name="sun-o" size={100} color="red" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highlow}>High: 8 </Text>
          <Text style={styles.highlow}>Low:6</Text>
        </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>
          <Text style={styles.message}>Its prefect t-shirt Weather</Text>
        </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highlow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:"flex-start"
  },
  description:{
    fontSize:48
  }
  ,
  message:{
    fontSize:30
  }
})

export default App;

