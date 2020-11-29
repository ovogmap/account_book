import React from 'react';
import { Button } from 'react-native';

const BackBtn = ({ Back }) => {
  return (
    <Button title="뒤로가기" onPress={Back} />
  ) 
}
export default BackBtn;