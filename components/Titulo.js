import React from 'react';
import {Text, Button} from 'react-native';

const Boton = ({titulo, onPress}) => {
  return <Button title={titulo} color={'purple'} onPress={onPress} />;
};

const Titulo = ({title}) => {
  return <Text>{title}</Text>;
};

export default Titulo;
export {Boton};
