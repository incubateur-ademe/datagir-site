import React from 'react'
import styled from 'styled-components'

import ButtonLink from 'src/components/base/ButtonLink'

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0.5rem 1rem;
  width: 24rem;
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
`
const Top = styled.div``
const Bottom = styled.div``
const Image = styled.img`
  width: ${(props) => (props.margin ? '100%' : 'calc(100% + 3rem)')};
  margin: ${(props) => (props.margin ? '0 0' : '-1.5rem -1.5rem')} 1.5rem;
`
const Title = styled.h3``
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default function Tile(props) {
  return (
    <Content color={props.color}>
      <Top>
        {props.image && <Image src={props.image} margin={props.margin} />}
        {props.title && <Title>{props.title}</Title>}
        {props.text && <Text>{props.text}</Text>}
      </Top>
      <Bottom>
        {props.link && (
          <ButtonWrapper>
            <ButtonLink to={props.link} color={props.color}>
              {props.linkLabel || 'En savoir +'}
            </ButtonLink>
          </ButtonWrapper>
        )}
      </Bottom>
    </Content>
  )
}

Tile.Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`
