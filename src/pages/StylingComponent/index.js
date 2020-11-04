import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import technology from '../../assets/images/techno.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
        }}></View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={technology}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Mac Book 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            borderRadius: 20,
            paddingVertical: 12,
            marginTop: 20,
          }}>
          <Text
            style={{color: '#ffffff', textAlign: 'center', fontWeight: '600'}}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
  },
});

export default StylingComponent;
