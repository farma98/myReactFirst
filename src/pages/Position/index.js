import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../assets/icons/cart.jpg';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>12</Text>
      </View>
      <Text style={styles.textBelanja}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cardWrapper: {
    borderWidth: 1,
    borderColor: '#4369D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  textBelanja: {marginTop: 10, fontWeight: '700', fontSize: 12},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
