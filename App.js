import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleTap = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fullScreenTouchable} onPress={handleTap}>
        <Text style={styles.counterText}>{counter}</Text>
        <Text style={styles.instructions}>Tap anywhere on the screen to add 1 visitor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetCounter}>
        <Text style={styles.resetButtonText}>Reset Counter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenTouchable: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    color: 'grey',
  },
  resetButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
