import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

// class FlexBox extends Component {
//     constructor(props) {
//         super(props);
//         console.log('===> constructor')
//         this.state = {
//             subscriber: 200,
//         }
//     }

//     componentDidMount() {
//         console.log('===> component did mount')
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 400,
//             })
//         }, 2000)
//     }

//     componentDidUpdate() {
//         console.log('===> component did update')
//     }

//     componentWillUnmount() {
//         console.log('===> component will unmount')
//     }

//     render() {
//         console.log('===> render')
//         return (
//             <View>
//                 <View View style={{ flexDirection: "row", alignItems: "flex-start", backgroundColor: '#000000', justifyContent: "space-between" }}>
//                     <View style={{ width: 100, height: 50, backgroundColor: '#d63031' }}></View>
//                     <View style={{ width: 100, height: 50, backgroundColor: '#fdcb6e' }}></View>
//                     <View style={{ width: 100, height: 50, backgroundColor: '#55efc4' }}></View>
//                 </View >
//                 <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                     <Text>Nav 1</Text>
//                     <Text>Nav 2</Text>
//                     <Text>Nav 3</Text>
//                     <Text>Nav 4</Text>
//                     <Text>Nav 5</Text>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
//                     <Image
//                         source={{ uri: 'https://placeimg.com/640/480/any/sepia' }}
//                         style={{ width: 100, height: 100, borderRadius: 50 }} />
//                     <View style={{ marginLeft: 20 }}>
//                         <Text>Mahfudin Dwi Prasetyo</Text>
//                         <Text>Fresh Graduate Programmer</Text>
//                         <Text>{this.state.subscriber} juta subsriber</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(100);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //     console.log('did update')
  //     setTimeout(() => {
  //         setSubscriber(500)
  //     }, 2000)
  // }, [subscriber])

  return (
    <View>
      <View
        View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: '#000000',
          justifyContent: 'space-between',
        }}>
        <View
          style={{width: 100, height: 50, backgroundColor: '#d63031'}}></View>
        <View
          style={{width: 100, height: 50, backgroundColor: '#fdcb6e'}}></View>
        <View
          style={{width: 100, height: 50, backgroundColor: '#55efc4'}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Nav 1</Text>
        <Text>Nav 2</Text>
        <Text>Nav 3</Text>
        <Text>Nav 4</Text>
        <Text>Nav 5</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          source={{uri: 'https://placeimg.com/640/480/any/sepia'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{marginLeft: 20}}>
          <Text>Mahfudin Dwi Prasetyo</Text>
          <Text>Fresh Graduate Programmer</Text>
          <Text>{subscriber} juta subsriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
