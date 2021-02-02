import React, { useState } from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'
import TextInput from 'src/components/base/TextInput'
import Select from 'src/components/base/Select'
import TextArea from 'src/components/base/TextArea'

const Form = styled.form`
  width: 42.75rem;
`
export default function Contact() {
  const [user, setUser] = useState({
    name: '',
    mail: '',
    subject: '',
    message: '',
  })
  return (
    <Section>
      <Section.Title>Nous Contacter</Section.Title>
      <Form>
        <TextInput
          name={'name'}
          value={user.name}
          label={'Votre nom'}
          onChange={({ name, value }) =>
            setUser((prevUser) => ({ ...prevUser, [name]: value }))
          }
        />
        <TextInput
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
      </Form>
    </Section>
  )
}
