import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // Type Data Primitive
  const nama = 'Mahfudin Dwi P';
  let umur = 22;
  const jenisKelamin = true;

  // Type Data Complex
  const hewanPeliharaan = {
    name: 'Dogy',
    age: 2,
    color: orange,
    parent: {
      dad: 'Bull',
      mom: 'Bullma',
    },
  };

  const SayHello = (nama, umur) => {
    return;
    console.log('Hello ${nama} usia ${age}');
  };
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textStyle: {textAlign: 'center'},
});
