import React, { useState } from 'react';
import styled from 'styled-components'
import { View, Text, Button, ScrollView } from 'react-native';

import { RadioButton  } from 'react-native-paper';

import { GreenText, RedText, LightText, DarkText } from '../style/GlobalColor'
function Main({ navigation }) {
  const [dark, setDark] = useState(false)
  const onSwitch = () => {
    setDark(v => !v)
  }
  const [show,setShow] = useState(false)
  const onWrite = () => {
    setShow(v => !v)
  }
  const [value, setValue] = React.useState('first');

  return (
    <ScrollView style={{ backgroundColor: dark ? "#1E1F21" : "#F5F5F5" }}>
      <Button title={ dark ? "라이트" : "다크"} onPress={onSwitch}/>
      <Container onDark={dark}>
        <TitleBox>
          <Title onDark={dark}>이정곤의 가계부</Title>
          <Profile/>
        </TitleBox>
        <MyInfoBox onDark={dark}>
          <MyInfo>
            <InfoTitle onDark={dark} >이정곤의 잔액</InfoTitle>
          </MyInfo>
          <MyMoney>
            <MoneyInfo onDark={dark}>
              1,870,000 원
            </MoneyInfo>
          </MyMoney>
        </MyInfoBox>
        <SubInfoBox onDark={dark}>
          <SubContent>
            <SubTitle onDark={dark}>수 입</SubTitle>
            <SubLText>+2,340,000 원</SubLText>
          </SubContent>
          <Sun/>
          <SubContent>
            <SubTitle onDark={dark}>지 출</SubTitle>
            <SubRText>-1,345,000 원</SubRText>
          </SubContent>
        </SubInfoBox>
        <SubTitleBox>
          <Title onDark={dark}>작성하기</Title>
        </SubTitleBox>
        {show && <WriteBox onDark={dark}>
          <ContentBox>
            <SubTitleBox>
              <Title onDark={dark}>날짜</Title>
            </SubTitleBox>
            <InputBox>
              <Input onDark={dark}/>
              <Input onDark={dark}/>
              <Input onDark={dark}/>
            </InputBox>
          </ContentBox>
          <ContentBox>
            <SubTitleBox>
              <Title onDark={dark}>수입/지출 선택</Title>
            </SubTitleBox>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
              <RadioBox>
                <RadioContent>
                  <RadioButton.Item onDark={dark} labelStyle={{color: !dark ? "#333" : "#fff" }} color={GreenText} label="수입" value="first" />
                </RadioContent>
                <RadioContent>  
                  <RadioButton.Item onDark={dark} labelStyle={{color: !dark ? "#333" : "#fff" }} color={RedText} label="지출" value="second" />
                </RadioContent>
              </RadioBox>
            </RadioButton.Group>
            <InputBox>
              <MainInput onDark={dark} mode="outlined" placeholder="내용을 입력해 주세요."/>
            </InputBox>
          </ContentBox>
          <ContentBox>
            <SubTitleBox>
              <Title onDark={dark}>금 액</Title>
            </SubTitleBox>
            <InputBox>
              <MainInput onDark={dark} mode="outlined" placeholder="금액을 입력해 주세요. 예: 220000"/>
            </InputBox>
          </ContentBox>
          <BtnBox>
            <CancelRtn onPress={()=> {}}>
              <BtnText onDark={dark}>작성취소</BtnText>
            </CancelRtn>
            <SuccessRtn onPress={()=> {}}>
              <BtnText onDark={dark}>작성완료</BtnText>
            </SuccessRtn>
          </BtnBox>
        </WriteBox>}
        
        <AddContentBtn 
          onDark={dark}
          activeOpacity={1}
          underlayColor="rgba(0,0,0,0.3)"
          onPress={onWrite}
        >
          <AddPlus>+</AddPlus>
        </AddContentBtn>
      </Container>
    </ScrollView>
  )
}
export default Main

const BtnText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

const SuccessRtn = styled.TouchableHighlight`
  width: 47%;
  height: 50px;
  background: #3DCE42;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const CancelRtn = styled.TouchableHighlight`
  width: 47%;
  height: 50px;
  background: #EF2323;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const BtnBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const RadioContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const RadioBox = styled.View`
  width: 100%;
  flex-direction: row;
`;

const MainInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background: #6D6D6D;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
  ${props => {
    if(!props.onDark){
      return `
        background: #F9F9F9;
        color: #333;
      `
    } else {
      return `
      background: #6D6D6D;
      color: #fff;
      `
    }
  }} 
`;

const InputBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  width: 30%;
  height: 35px;
  background: #6D6D6D;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
  text-align: center;
  ${props => {
    if(!props.onDark){
      return `
        background: #F9F9F9;
        color: #333;
      `
    } else {
      return `
      background: #6D6D6D;
      color: #fff;
      `
    }
  }} 
`;

const ContentBox = styled.View`
  width: 100%;
`;

const WriteBox = styled.View`
  width: 90%;
  padding: 10px 20px 30px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  ${props => {
    if(!props.onDark){
      return `
        background: #fff;
      `;
    } else {
      return `
        background: #2C2D30;
      `;
    }
  }}
`;

const AddContentBtn = styled.TouchableHighlight`
  width: 90%;
  height: 70px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${props => {
    if(!props.onDark){
      return `
        background: #E9E9E9;
      `
    } else {
      return `
        background: #1E1F21;
        border: 1px solid #3A3B3D; 
      `
    }
  }}
`;

const AddPlus = styled.Text`
  font-size: 38px;
  color: #fff;
  font-weight: 600;
`;

const SubInfoBox = styled.View`
  margin-top: 30px;
  width: 90%;
  height: 100px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  ${props => {
    if(!props.onDark){
      return `
        background: #fff;
      `;
    } else {
      return `
        background: #2C2D30;
      `;
    }
  }}
`;

const Sun = styled.View`
  width: .4%;
  height: 30%;
  background: #eee;
  
`;

const SubContent = styled.View`
  width: 49.6%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  ${(props) => {
    if(!props.onDark){
      return `color: ${LightText}`
    } else {
      return `color: ${DarkText}`;
    }
  }}
`;

const SubLText = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: ${GreenText};
`;

const SubRText = styled.Text`
  color: ${RedText};
  font-size: 20px;
  font-weight: 900;
`;

const MyInfoBox = styled.View`
  width: 90%;
  height: 200px;
  border-radius: 10px;
  ${props => {
    if(!props.onDark){
      return `
        background: #fff;
      `;
    } else {
      return `
        background: #2C2D30;
      `;
    }
  }}
`;

const MyInfo = styled.View`
  width: 100%;
  padding: 20px;
`;

const InfoTitle = styled.Text`
    ${(props) => {
    if(!props.onDark){
      return `color: ${LightText}`
    } else {
      return `color: ${DarkText}`;
    }
  }}
  font-size: 16px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const MyMoney = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const MoneyInfo = styled.Text`
    ${(props) => {
    if(!props.onDark){
      return `color: ${LightText}`
    } else {
      return `color: ${DarkText}`;
    }
  }}
  font-size: 34px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const Container = styled.View`
  ${(props) => {
    if(!props.onDark){
      return `
        color: ${LightText}
        background: #F5F5F5;
      `
    } else {
      return `
        color: ${DarkText}
        background:#1E1F21;  
      `;
    }
  }}
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`; 

const TitleBox = styled.View`
  flex-direction: row;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  width: 90%;
`;

const SubTitleBox = styled.View`
  flex-direction: row;
  /* align-items: left; */
  margin: 30px 0 20px 0;
  width: 90%;
`;

const Title = styled.Text`
  ${(props) => {
    if(!props.onDark){
      return `color: ${LightText}`
    } else {
      return `color: ${DarkText}`;
    }
  }}
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans KR';
`;

const Profile = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #333;
`;