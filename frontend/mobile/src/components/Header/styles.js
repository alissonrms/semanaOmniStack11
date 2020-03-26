import styled from 'styled-components/native';
import Constants from 'expo-constants'

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight + 20}px ;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Logo = styled.Image`

`

export const HeaderText = styled.Text`
  color: #737380;
  font-size: 15px;
`

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`
export const ReturnButton = styled.TouchableOpacity`

`