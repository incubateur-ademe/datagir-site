import React, { useState } from 'react'
import styled from 'styled-components'

import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 36.5rem;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 1.8125rem;
  background-color: ${(props) => props.theme.colors.tile};

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.3125rem;
    background-color: ${(props) =>
      props.theme.colors[props.color] || props.theme.colors.main};
  }

  ${(props) => props.theme.mq.medium} {
    padding: 1rem 1rem calc(1rem + 0.3125rem);
  }
`
const Form = styled.form``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Introduction = styled.p`
  font-weight: 700;
`
export default function Contact(props) {
  const [user, setUser] = useState({
    email: '',
  })

  const [code, setCode] = useState(null)

  return (
    <Section>
      <Wrapper sector={props.sector}>
        <Section.Title>Notre Newsletter</Section.Title>
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
            <Button>M'abonner</Button>
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
      </Wrapper>
    </Section>
  )
}
