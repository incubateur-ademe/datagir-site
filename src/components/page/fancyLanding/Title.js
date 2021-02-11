import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  position: relative;
  margin: 0 0 0
    ${(props) =>
      props.title === 'Alimentation'
        ? 9.75
        : props.title === 'Transport'
        ? 10.75
        : props.title === 'Logement'
        ? 8.9375
        : props.title === 'Jeux de données'
        ? 7.3
        : 18.9375}rem;
  font-size: 5.5rem;
  line-height: 1.2;

  ${(props) => props.theme.mq.medium} {
    font-size: 11vw;
    margin: 0 0 0
      ${(props) =>
        props.title === 'Alimentation'
          ? 11.7
          : props.title === 'Transport'
          ? 13.5
          : props.title === 'Logement'
          ? 9.7
          : props.title === 'Jeux de données'
          ? 7
          : 18.9375}vw;
  }

  ${(props) => props.theme.mq.small} {
    margin: 0 0 0 11.5vw;
    font-size: 10vw;
  }
`
const Color = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding-top: 6.25rem;
  color: ${(props) => props.theme.colors[props.color]};

  ${(props) => props.theme.mq.small} {
    padding: 19vw 0;
  }
`
const White = styled.span`
  position: relative;
  display: block;
  padding-top: 6.25rem;
  width: calc(
    24rem -
      ${(props) =>
        props.title === 'Alimentation'
          ? 9.75
          : props.title === 'Transport'
          ? 10.75
          : props.title === 'Logement'
          ? 8.9375
          : props.title === 'Jeux de données'
          ? 7.3
          : 18.9375}rem
  );
  color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  ${(props) => props.theme.mq.medium} {
    width: calc(
      40vw -
        ${(props) =>
          props.title === 'Alimentation'
            ? 11.7
            : props.title === 'Transport'
            ? 13.5
            : props.title === 'Logement'
            ? 9.7
            : props.title === 'Jeux de données'
            ? 7
            : 18.9375}vw
    );
  }
  ${(props) => props.theme.mq.small} {
    padding: 19vw 0;
    width: calc(50vw - 11.5vw - 0.5rem);
  }
`
export default function Title(props) {
  return (
    <Wrapper title={props.title}>
      <Color color={props.color}>
        {props.children.replace(/ /g, '\u00a0')}
      </Color>
      <White title={props.title}>
        {props.children.replace(/ /g, '\u00a0')}
      </White>
    </Wrapper>
  )
}
