import React, { useEffect, useState } from 'react'
import { Background, Container, Title, Description } from './styles'
import { FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api'

import { HeaderDefault } from '../../components/Header'
import { IncidentReduced } from '../../components/Incident'

export default function Incidents() {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident })
  }

  async function loadIncidents(){
    if (loading){
      return
    }

    if (total > 0 && incidents.length === total){
      return
    }

    setLoading(true)
    

    const response = await api.get('/incidents', {
      params: { page }
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <Background>
      <HeaderDefault totalCases={total} />

      <Container>
        <Title>Bem-vindo!</Title>
        <Description>Escolha um dos casos abaixo e salve o dia</Description>

        <FlatList 
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident}) => (
            <IncidentReduced title={incident.title}
             ong={incident.name} 
             cost={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)} 
             function={() => navigateToDetail(incident)}/>
          )}
        />
      
      </Container>
    </Background>
  )
}