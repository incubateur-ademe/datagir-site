import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.medium} {
    width: 33.3333vw;
    padding: 0 0.5rem;
  }
  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors[props.color]};

  ${(props) => props.theme.mq.medium} {
    padding: 1rem;
  }
`
const Top = styled.div``
const Title = styled.h2`
  margin-bottom: 0.675em;
  font-size: ${(props) => (props.small ? '2em' : '2.5em')};
  color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.medium} {
    font-size: 1.75em;
  }
`
const Subtitle = styled.p`
  font-weight: 700;
`
const Text = styled.p`
  margin-bottom: 1.5rem;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledLink = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  font-size: 2em;
  font-weight: 800;
  text-align: right;
  color: ${(props) => props.theme.colors.background};
  line-height: 1;
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.colors.background};
  }
  &:hover {
    &:before {
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
  }

  ${(props) => props.theme.mq.medium} {
    font-size: 1.25em;
  }
`
export default function TileColor(props) {
  return (
    <Wrapper>
      <Content color={props.color}>
        <Top>
          <Title small={props.small}>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Text>{props.text}</Text>
        </Top>
        <LinkWrapper>
          <StyledLink to={`/${props.link}`}>
            {props.label || 'En savoir +'}
          </StyledLink>
        </LinkWrapper>
      </Content>
    </Wrapper>
  )
}
