import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import TextInput from 'src/components/base/TextInput'
import Select from 'src/components/base/Select'
import TextArea from 'src/components/base/TextArea'
import Button from 'src/components/base/Button'

const StyledSection = styled(Section)`
  max-width: 36.5rem;
  margin-left: auto;
  margin-right: auto;
`
const Form = styled.form``
const Content = styled.div`
  display: flex;
  align-items: flex-start;
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
    name: '',
    mail: '',
    subject: '',
    message: '',
  })
  return (
    <StyledSection id='contact'>
      <Section.Title>Nous Contacter</Section.Title>
      <Content sector={props.sector}>
        <Form
          method='post'
          netlify-honeypot='bot-field'
          data-netlify='true'
          name='contact'
        >
          <Introduction>
            Vous pouvez nous écrire à{' '}
            <a href='mailto:datagir@ademe.fr'>datagir@ademe.fr</a> ou utiliser
            le formulaire ci-dessous :
          </Introduction>
          <input type='hidden' value={props.sector || 'homepage'} />
          <TextInput
            name={'name'}
            value={user.name}
            label={'Votre nom'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
          <TextInput
            type='mail'
            name={'mail'}
            value={user.mail}
            label={'Votre email'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
          <Select
            name={'subject'}
            value={user.subject}
            label={'Votre sujet'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
            options={[
              { label: 'Nos simulateurs', value: 'applications' },
              { label: 'Nos jeux de données', value: 'databases' },
            ]}
          />
          <TextArea
            name={'message'}
            value={user.message}
            label={'Votre message'}
            onChange={({ name, value }) =>
              setUser((prevUser) => ({ ...prevUser, [name]: value }))
            }
          />
          <ButtonWrapper>
            <Button submit>Envoyer mon message</Button>
          </ButtonWrapper>
        </Form>
      </Content>
    </StyledSection>
  )
}
