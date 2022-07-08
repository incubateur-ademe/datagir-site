import React, { useState } from 'react'
import styled from 'styled-components'

import useSubscribeEmail from 'hooks/useSubscribeEmail'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 36.5rem;
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.main};

  ${(props) => props.theme.mq.medium} {
    margin-bottom: 3rem;
    padding: 1rem;
  }
`
const StyledTitle = styled(Section.Title)`
  color: ${(props) => props.theme.colors.background};
`
const Form = styled.form``
const MailInput = styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.background};
  background-color: transparent;
  box-shadow: none;
  border: 2px solid ${(props) => props.theme.colors.background};

  &::placeholder {
    color: ${(props) => props.theme.colors.background};
    opacity: 0.7;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Introduction = styled.p`
  font-weight: 700;
`
export default function Contact(props) {
  const [email, setEmail] = useState('')

  const mutation = useSubscribeEmail()
  console.log(mutation)
  return (
    <Wrapper>
      <StyledTitle>Notre Newsletter</StyledTitle>
      <Form
        method='post'
        netlify-honeypot='bot-field'
        data-netlify='true'
        name='newsletter'
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()

          mutation.mutate(email)
        }}
      >
        <Introduction
          dangerouslySetInnerHTML={{
            __html: `Abonnez vous à notre newsletter pour être au courant de l'actualité de&nbsp;Datagir&nbsp;:`,
          }}
        />
        <input type='hidden' value={props.sector || 'homepage'} />
        <MailInput
          type='mail'
          name={'email'}
          value={email}
          placeholder={'Votre email'}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <ButtonWrapper>
          <Button color={'background'} thick hollow noExpand>
            M'abonner
          </Button>
        </ButtonWrapper>
        {mutation.isError && (
          <Alert role='alert' error>
            {mutation?.error?.response?.data?.message ===
            'Contact already in list and/or does not exist'
              ? `Vous êtes déjà inscrit à notre newsletter`
              : `Une erreur est survenue`}
          </Alert>
        )}
        {mutation.isSuccess && (
          <Alert role='status'>Vous êtes maintenant inscrit !</Alert>
        )}
      </Form>
    </Wrapper>
  )
}
