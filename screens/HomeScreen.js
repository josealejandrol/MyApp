import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log('Parametros recibidos: ', navigation);

  let name = 'José Alejandro 2';

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text>Soy HomeScreen</Text>
      <Button
        title="Ir a About"
        onPress={() => navigation.navigate('About', {name})}
      />
    </View>
  );
};

export {HomeScreen};
