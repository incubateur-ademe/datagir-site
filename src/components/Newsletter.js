import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

const Form = styled.form`
  max-width: 36.5rem;
`
const Content = styled.div`
  display: flex;

  &:before {
    content: '';
    position: relative;
    width: 11.5rem;
    margin-right: 1rem;
    background-color: ${(props) =>
      props.color ||
      props.theme.colors[props.sector] ||
      props.theme.colors.main};

    ${(props) => props.theme.mq.small}  {
      display: none;
    }
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Introduction = styled.p`
  max-width: 36.5rem;
  font-weight: 700;
`
export default function Contact(props) {
  const [user, setUser] = useState({
    email: '',
  })

  const [code, setCode] = useState(null)

  return (
    <Section id='contact'>
      <Section.Title>Notre newsletter</Section.Title>
      <Content sector={props.sector}>
        <Form
          method='post'
          netlify-honeypot='bot-field'
          data-netlify='true'
          name='newsletter'
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            let headers = new Headers()
            headers.append('Content-Type', 'application/json')
            headers.append(
              'api-key',
              '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'
            )
            return fetch('https://api.sendinblue.com/v3/contacts', {
              method: 'POST',
              body: JSON.stringify({ email: user.email }),
              headers,
            })
              .then((res) => {
                if (!res.ok) {
                  setCode(res.code)
                }
                return res
              })
              .then((res) => res.json())
              .then((res) => setCode(res.id ? 'success' : res.code))
          }}
        >
          <Introduction>
            Abonnez vous à notre newsletter pour être au courant de l'actualité
            de Datagir :
          </Introduction>
          <input type='hidden' value={props.sector || 'homepage'} />
          <TextInput
            type='mail'
            name={'email'}
            value={user.email}
            label={'Votre email'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
          <ButtonWrapper>
            <Button>Envoyer mon message</Button>
          </ButtonWrapper>
          {code && (
            <Alert error={code !== 'success'}>
              {code === 'success'
                ? `Merci ! Votre inscription est confirmée :)`
                : code === 'duplicate_parameter'
                ? `Vous êtes déjà inscrit !`
                : code === 'invalid_parameter'
                ? `Votre adresse email n'est pas correcte`
                : `Une erreur est survenue :(`}
            </Alert>
          )}
        </Form>
      </Content>
    </Section>
  )
}
