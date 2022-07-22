import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import TextInput from 'src/components/base/TextInput'
import Select from 'src/components/base/Select'
import TextArea from 'src/components/base/TextArea'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

import Newsletter from './contact/Newsletter'

const Form = styled.form``
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
    align-items: center;
  }
`
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 36.5rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Introduction = styled.p`
  font-weight: 700;
`
export default function Contact(props) {
  const [user, setUser] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }
  return (
    <Section id='contact'>
      <Section.Title>Nous Contacter</Section.Title>
      <Flex>
        <Content sector={props.sector}>
          <Form
            method='post'
            data-netlify='true'
            name='contact'
            onSubmit={(e) => {
              e.preventDefault()
              setSuccess(false)
              setError(false)
              if (!user.nom || !user.email || !user.message) {
                setError(true)
              } else {
                fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: encode({
                    'form-name': 'contact',
                    ...user,
                  }),
                })
                  .then(() => setSuccess(true))
                  .catch((error) => setSuccess(true))
              }
            }}
          >
            <Introduction>
              Vous pouvez nous écrire à{' '}
              <a href='mailto:datagir@ademe.fr'>datagir@ademe.fr</a> ou utiliser
              le formulaire ci&#8209;dessous :
            </Introduction>
            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' value={props.sector || 'homepage'} />
            <TextInput
              name={'nom'}
              value={user.nom}
              error={error && !user.nom}
              label={'Votre nom'}
              autocomplete='name'
              onChange={({ name, value }) =>
                setUser((prevUser) => ({ ...prevUser, [name]: value }))
              }
            />
            <TextInput
              type='email'
              name={'email'}
              error={error && !user.email}
              value={user.email}
              label={'Votre email'}
              autocomplete='email'
              onChange={({ name, value }) =>
                setUser((prevUser) => ({ ...prevUser, [name]: value }))
              }
            />
            <Select
              name={'objet'}
              value={user.objet}
              label={'Votre sujet'}
              onChange={({ name, value }) =>
                setUser((prevUser) => ({ ...prevUser, [name]: value }))
              }
              options={[
                { label: 'Nos simulateurs', value: 'Simulateurs' },
                { label: 'Nos jeux de données', value: 'Jeux de donnees' },
                { label: 'Autre Sujet', value: 'Autre' },
              ]}
            />
            <TextArea
              name={'message'}
              value={user.message}
              error={error && !user.message}
              label={'Votre message'}
              onChange={({ name, value }) =>
                setUser((prevUser) => ({ ...prevUser, [name]: value }))
              }
            />
            <ButtonWrapper>
              <Button submit>Envoyer mon message</Button>
            </ButtonWrapper>
            {error && (
              <Alert role='alert' error>
                Merci de remplir tous les champs
              </Alert>
            )}
            {success && (
              <Alert role='status'>
                Merci ! Nous avons bien reçu votre message
              </Alert>
            )}
          </Form>
        </Content>
        <Newsletter sector={props.sector} />
      </Flex>
    </Section>
  )
}
