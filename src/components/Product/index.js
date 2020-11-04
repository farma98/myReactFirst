import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/techno.jpg';

const Product = (props) => {
  return (
    <View style={styles.backgrond}>
      <Image source={macbook} style={styles.imageTechno} />
      <Text style={styles.txtTitle}>New Mac Book 2019</Text>
      <Text style={styles.txtPrice}>25.000.000</Text>
      <Text style={styles.txtLocation}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.backgrondBtn}>
          <Text style={styles.btnBeli}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  backgrond: {
    padding: 12,
    backgroundColor: '#ecf0f1',
    width: 212,
    borderRadius: 8,
  },
  imageTechno: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  txtTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  txtPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12,
  },
  txtLocaton: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  backgrondBtn: {
    backgroundColor: '#6fcf97',
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 20,
  },
  btnBeli: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
