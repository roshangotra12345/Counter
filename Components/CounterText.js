import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterText = (props) => {
  return (
    <View>
      <Text style={{fontSize:100, textAlign:"center",}}>{props.counter}</Text>
     
    </View>
  )
}

export default CounterText

const styles = StyleSheet.create({})