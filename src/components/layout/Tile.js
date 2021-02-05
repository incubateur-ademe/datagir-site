import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Button from 'src/components/base/Button'

const TileWrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  width: 25rem;

  ${(props) => props.theme.mq.medium} {
    width: 33.3333vw;
    padding: 0 0.6666666666666667vw;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
const Top = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const Bottom = styled.div``
const Image = styled.div`
  flex: ${(props) => (props.margin ? 1 : 'inherit')};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.margin ? 'center' : 'flex-start')};
  width: ${(props) => (props.margin ? '100%' : 'calc(100% + 3rem)')};
  margin: ${(props) => (props.margin ? '0 0' : '-1.5rem -1.5rem')} 1.5rem;
`
const Title = styled.h3`
  flex: ${(props) => (props.margin ? 'initial' : 1)};
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
export default function Tile(props) {
  return (
    <TileWrapper>
      <Content color={props.color}>
        <Top>
          {props.image && (
            <Image margin={props.margin}>
              <Img
                fluid={props.image.childrenImageSharp[0].fluid}
                alt={props.title}
              />
            </Image>
          )}
          {props.title && <Title margin={props.margin}>{props.title}</Title>}
          {props.text && <Text>{props.text}</Text>}
        </Top>
        <Bottom>
          {props.link && (
            <ButtonWrapper>
              <Button to={props.link} color={props.color}>
                {props.linkLabel || 'En savoir +'}
              </Button>
            </ButtonWrapper>
          )}
        </Bottom>
      </Content>
    </TileWrapper>
  )
}

Tile.Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;

  ${(props) => props.theme.mq.medium} {
    margin: 0 -0.6666666666666667vw;
  }
`
