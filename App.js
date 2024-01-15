import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  function calculate(text) {
    setAge(text);
    if (age < 120) {
      const lower = (220 - age) * 0.65;
      const upper = (220 - age) * 0.85;
      result = lower.toFixed(0) + ' - ' + upper.toFixed(0);
      setLimits(result);
    } else {
      setLimits('Can you even live that long?');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setAge(text)} />
      <Text style={styles.text}>Heart rate limits</Text>
      <Text style={styles.text}>{limits}</Text>
      <Button style={styles.text} onPress={calculate} title={'Calculate'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 5
  },
  input: {
    borderWidth: 0.5,
    width: '10%',
    borderColor: 'black',
    textAlign: 'center'
  }
});
