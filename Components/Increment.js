import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Increment = (props) => {
  return (
    <View>
     
      <TouchableOpacity style={styles.button}
         onPress={props.Increment} 
        >
          <Text style={{color:"#fff"}}>increment</Text>
        </TouchableOpacity>
    </View>
  )
}



export default Increment



const styles = StyleSheet.create({
 
    button: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        margin:23,
        width:100,
        borderRadius:12
      },
  
  });