import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)}></Button>
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() =>
            this.setState({number: this.state.number + 1})
          }></Button>
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>Functional Component (Hooks)</Text>
      <Counter />
      <Text style={styles.textStyle}>Class Component</Text>
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textStyle: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
