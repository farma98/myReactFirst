import React from 'react';
import {ScrollView, View} from 'react-native';
import BasicJavascript from './src/pages/BasicJavascript';
import Communication from './src/pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Communication />
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;
