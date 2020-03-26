import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: #f0f0f5;
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 30px;
`;

export const ContainerContact = styled.View`
  margin-bottom: 16px;
  background-color: #fff;
  padding: 30px 30px;
  border-radius: 8px;
`

export const ObjectContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #13131a;
  line-height: 30px;
`

export const TextDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
  margin-bottom: 10px;
`


export const ButtonContact = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 50px;
  background-color: #e02041;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`

