import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Mahfudin</Text>
      <MiddleName />
      <Text>Prasetyo</Text>
      <PhotoImage />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <PhotoProfile />
    </View>
  );
};

const MiddleName = () => {
  return <Text>Dwi</Text>;
};

const PhotoImage = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Komponen Text</Text>;
  }
}

class PhotoProfile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/people'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>Ini Foto Saya</Text>
      </View>
    );
  }
}

export default SampleComponent;
