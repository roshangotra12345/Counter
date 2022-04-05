import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CounterText from './Components/CounterText';
import Increment from './Components/Increment';
import Decrement from './Components/Decrement';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handledecrement = () => setCounter(counter - 1);
  const handleZero = () => {
    setCounter(0);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <CounterText counter={counter} />

      <View style={styles.container}>
        <Increment style={{color: '#000'}} Increment={handleIncrement} />

        <TouchableOpacity style={styles.button} onPress={handleZero}>
          <Text style={{color: '#fff'}}>Reset</Text>
        </TouchableOpacity>

        <Decrement style={{color: '#000'}} Decrement={handledecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    margin: 23,
    width: 100,
    borderRadius: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
