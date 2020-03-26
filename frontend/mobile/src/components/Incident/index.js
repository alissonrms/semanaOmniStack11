import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { Container, ObjectContainer, ElementRight, ElementLeft, Title, Description, DetailsButton, ButtonText } from './styles'

import { Feather } from '@expo/vector-icons'

export function IncidentReduced(props) {
  return (
    <Container>

      <ObjectContainer>
        <ElementRight>
          <Title>CASO</Title>
          <Description>{props.title}</Description>
        </ElementRight>

        <ElementLeft>
          <Title>ONG</Title>
          <Description>{props.ong}</Description>
        </ElementLeft>
      </ObjectContainer>

      <Title>VALOR</Title>
      <Description>{props.cost}</Description>


      <DetailsButton onPress={props.function}>
        <ButtonText>Ver mais detalhes</ButtonText>
        <Feather name='arrow-right' size={16} color="#e02041" />
      </DetailsButton>

    </Container>
  )
}

export function Incident(props) {
  return (
    <Container>

      <ObjectContainer>
        <ElementRight>
          <Title>CASO</Title>
          <Description>{props.title}</Description>
        </ElementRight>

        <ElementLeft>
          <Title>ONG</Title>
          <Description>{props.ong}</Description>
        </ElementLeft>
      </ObjectContainer>

      <ObjectContainer>
        <ElementRight>
          <Title>DESCRIÇÃO</Title>
          <Description>{props.description}</Description>
        </ElementRight>

        <ElementLeft>
          <Title>VALOR</Title>
          <Description>{props.cost}</Description>
        </ElementLeft>
      </ObjectContainer>

    </Container>
  )
}