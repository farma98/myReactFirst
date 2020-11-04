import React from 'react';
import {ScrollView, View} from 'react-native';
import Communication from './src/pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
