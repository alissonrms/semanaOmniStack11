import React from 'react'
import { Container, HeaderText, HeaderTextBold, Logo, ReturnButton } from './styles'
import { Feather } from "@expo/vector-icons";

import logo from '../../assets/logo.png'

export function HeaderDefault(props) {
  return (
    <Container>
      <Logo source={logo} />
      <HeaderText>Total de <HeaderTextBold>{props.totalCases} casos</HeaderTextBold></HeaderText>
    </Container>
  )
}

export function HeaderDetail(props) {
  return (
    <Container>
      <Logo source={logo} />
      <ReturnButton onPress={props.function}>
        <Feather name='arrow-left' size={22} color='#e82041' />
      </ReturnButton>
    </Container>
  )
}