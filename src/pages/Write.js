import React from 'react';
import { Text, View } from 'react-native';

import { BackBtn } from '../components'

function Write({ navigation }) {
  const Back = () => { navigation.goBack() }
  return (
    <View>
      <BackBtn Back={Back}/>
      <Text>작성페이지</Text>
    </View>
  )
}
export default Write;