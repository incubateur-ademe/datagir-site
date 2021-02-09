import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.top ? 'column-reverse' : props.left ? 'row-reverse' : 'row'};
  align-items: center;
  margin-bottom: 1.5rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column-reverse;
  }
`

export default function Block(props) {
  return (
    <Wrapper top={props.top} left={props.left}>
      {props.children}
    </Wrapper>
  )
}

Block.Image = styled.div`
  width: ${(props) => (props.top ? '49rem' : '42.75rem')};
  margin: ${(props) => (props.top ? '-6rem 0 0 0' : '0')};

  ${(props) => props.theme.mq.medium} {
    width: ${(props) => (props.top ? '100vw' : '42.75rem')};
  }

  ${(props) => props.theme.mq.small} {
    width: 100vw;
    margin-top: -2rem;
  }
`
Block.Title = styled.h3``
Block.MainTitle = styled.h1`
  font-size: 2rem;
`
Block.Date = styled.div`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
`
Block.Text = styled.p``
Block.Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${(props) => (props.top ? '36.5rem' : '30.25rem')};
  margin: ${(props) =>
    props.top ? '0 0 0 0' : props.left ? '0 -11.5rem 0 0' : '0 0 0 -11.5rem'};
  padding: 1.5rem 1.5rem 1.8125rem;
  background-color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.small} {
    width: 90vw;
    margin: 0 auto;
  }

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
`
Block.Buttons = styled.div``
