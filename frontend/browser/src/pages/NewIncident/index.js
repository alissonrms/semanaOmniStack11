import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncident(e){
    e.preventDefault()

    const data = {
      title: title,
      description: description,
      value: value,
    }

    try{
      await api.post('/incidents', data, {
        headers:{
          Authorization: ongId
        }
      })

      history.push('/profile')
    }catch(err){
      alert('Erro ao cadastrar o caso, tente novamente')
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói
          para resolver isso
          </p>

          <Link className='back-link' to="/profile">
            <FiArrowLeft size={16} color="#e02941" />
            Voltar para Home
          </Link>

        </section>

        <form onSubmit={handleNewIncident}>
          <input 
          placeholder="Título do caso"
          name={title}
          onChange={e => setTitle(e.target.value)}
          />
          <textarea 
          placeholder="Descrição"
          name={description}
          onChange={e => setDescription(e.target.value)}
          />
          <input 
          placeholder="Valor"
          name={value}
          onChange={e => setValue(e.target.value)}
          />

          <button className="button" type='submit'>Cadastrar novo caso</button>
        </form>
      </div>
    </div>
  )
}