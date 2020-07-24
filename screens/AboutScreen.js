import React from 'react';
import {View, Text, Button} from 'react-native';

const AboutScreen = ({navigation, route}) => {
  // console.log(navigation);
  // console.log('Route', route);

  const {name} = route.params;

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Hola {name}</Text>
      <Button title="Volver a Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export {AboutScreen};
