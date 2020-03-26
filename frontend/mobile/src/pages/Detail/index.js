import React from 'react'
import { HeaderDetail } from '../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'

import { Incident } from '../../components/Incident'

import { Background, Container, ObjectContainer, ContainerContact, TextTitle, TextDescription, ButtonContact, ButtonText } from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident

  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso '${incident.title}' com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`

  function backToHome() {
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })

  }

  function sendWhatsapp(){  
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <Background>
      <HeaderDetail function={backToHome} />

      <Container>
        <Incident title={incident.title} ong={`${incident.name} de ${incident.city}/${incident.uf}`} description={incident.description} cost={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)} />
        <ContainerContact>
          <TextTitle>Salve o dia!</TextTitle>
          <TextTitle>Seja o herói desse caso</TextTitle>

          <TextDescription>Entre em contato:</TextDescription>

          <ObjectContainer>
            <ButtonContact onPress={sendWhatsapp}>
              <ButtonText>Whatsapp</ButtonText>
            </ButtonContact>
            <ButtonContact onPress={sendMail}>
              <ButtonText>E-mail</ButtonText>
            </ButtonContact>
          </ObjectContainer>
        </ContainerContact>

      </Container>
    </Background>
  )
}