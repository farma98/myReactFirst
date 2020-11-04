import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{marginRight: 5, marginLeft: 5}}>
      <Image
        source={{uri: props.image}}
        style={{width: 50, height: 50, borderRadius: 25}}></Image>
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal>
        <Story title="Coding" image="https://placeimg.com/640/480/people" />
        <Story title="Touring" image="https://placeimg.com/640/480/tech" />
        <Story title="Sleeping" image="https://placeimg.com/640/480/arch" />
        <Story title="Coding" image="https://placeimg.com/640/480/people" />
        <Story title="Touring" image="https://placeimg.com/640/480/tech" />
        <Story title="Sleeping" image="https://placeimg.com/640/480/arch" />
        <Story title="Coding" image="https://placeimg.com/640/480/people" />
        <Story title="Touring" image="https://placeimg.com/640/480/tech" />
        <Story title="Sleeping" image="https://placeimg.com/640/480/arch" />
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
