import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.top ? 'column-reverse' : props.left ? 'row-reverse' : 'row'};
  align-items: center;
  margin-bottom: 1.5rem;
`

export default function Block(props) {
  return (
    <Wrapper top={props.top} left={props.left}>
      {props.children}
    </Wrapper>
  )
}

Block.Image = styled.div`
  width: ${(props) => (props.top ? '49rem' : '42.75rem;')};
  margin: ${(props) => (props.top ? '-6rem 0 0 0' : '0')};
`
Block.Title = styled.h3``
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
