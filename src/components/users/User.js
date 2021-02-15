import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 36.5rem;
  height: 100%;
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
const Logo = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-bottom: 2.5rem;

  ${(props) => props.theme.mq.small} {
    width: 50vw;
  }
`
const Quote = styled.blockquote`
  margin: 0 1.5rem 1rem;
  font-size: 1.125rem;

  &:before {
    content: '“ ';
    display: inline-block;
    margin: 0 0.25rem 0 -0.5em;
    color: ${(props) => props.theme.colors.main};
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0;
  }
  &:after {
    content: ' „';
    display: inline-block;
    margin: 0 -0.5em 0 0.25rem;
    color: ${(props) => props.theme.colors.main};
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0;
  }
`
const Signature = styled.div`
  align-self: flex-end;
  font-weight: 300;
`
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 1.5rem -0.5rem 0;

  > * {
    margin: 0 0.5rem;
  }
`
export default function User(props) {
  return (
    <Wrapper color={props.user.sector}>
      <Logo>
        <Img
          fluid={props.user.image.childrenImageSharp[0].fluid}
          alt={props.user.title}
        />
      </Logo>
      <Quote>{props.user.quote}</Quote>
      <Signature>{props.user.signature}</Signature>
      {props.user.buttons && (
        <Buttons>
          {props.user.buttons.map((button) => (
            <Button key={button.label} to={button.link}>
              {button.label}
            </Button>
          ))}
        </Buttons>
      )}
    </Wrapper>
  )
}
