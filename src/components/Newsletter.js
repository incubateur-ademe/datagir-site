import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'

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
    name: '',
    mail: '',
    subject: '',
    message: '',
  })
  return (
    <Section id='contact'>
      <Section.Title>Notre newsletter</Section.Title>
      <Content sector={props.sector}>
        <Form
          method='post'
          netlify-honeypot='bot-field'
          data-netlify='true'
          name='newsletter'
        >
          <Introduction>
            Abonnez vous à notre newsletter pour être au courant de l'actualité
            de Datagir :
          </Introduction>
          <input type='hidden' value={props.sector || 'homepage'} />
          <TextInput
            type='mail'
            name={'mail'}
            value={user.mail}
            label={'Votre email'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
          <ButtonWrapper>
            <Button submit>Envoyer mon message</Button>
          </ButtonWrapper>
        </Form>
      </Content>
    </Section>
  )
}
