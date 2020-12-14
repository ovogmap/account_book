import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Button } from 'react-native';

const Profile = () => {

  let i = 1;
  const setData = async () => {
    try {
      await AsyncStorage.setItem(`테스트${i}`, `테스트${i}`)
      i++
    } catch(e) {
      console.log(e)
    }
  }
  const getData = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      const arrSort = keys.sort((a,b) => a.split(last) - b)
      console.log('arrSort', keys)
      for(let key of arrSort) {
        const result = await AsyncStorage.getItem(`${key}`)
        console.log('result',result)
      }
    } catch(e) {
      console.log(e)
    }
  }
  const removeData = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      console.log('keys', keys)
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <View>
      <Text>프로필 페이지???</Text>
      <Button title="저장" onPress={()=>{setData()}}/>
      <Button title="가져어기" onPress={()=>{getData()}}/>
      <Button title="삭제" onPress={()=>{removeData()}}/>
    </View>
  )
}
export default Profile