import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Decrement = (props) => {
  return (
    <View>
    

      <TouchableOpacity style={styles.button}
         onPress={props.Decrement} 
        >
          <Text style={{color:"#fff"}}>Decrement</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Decrement


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