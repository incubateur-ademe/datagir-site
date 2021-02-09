import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  position: relative;
  margin: 0 0 0
    ${(props) =>
      props.sector === 'alimentation'
        ? 9.75
        : props.sector === 'transport'
        ? 10.75
        : props.sector === 'logement'
        ? 8.9375
        : 18.9375}rem;
  font-size: 5.5rem;
  line-height: 1.2;

  ${(props) => props.theme.mq.medium} {
    font-size: 11.5vw;
    margin: 0 0 0
      ${(props) =>
        props.sector === 'alimentation'
          ? 11.9
          : props.sector === 'transport'
          ? 14
          : props.sector === 'logement'
          ? 10.29
          : 18.9375}vw;
  }

  ${(props) => props.theme.mq.small} {
    margin: 0 0 0
      ${(props) =>
        props.sector === 'alimentation'
          ? 19.7
          : props.sector === 'transport'
          ? 21.6
          : props.sector === 'logement'
          ? 18
          : 18.9375}vw;
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
        props.sector === 'alimentation'
          ? 9.75
          : props.sector === 'transport'
          ? 10.75
          : props.sector === 'logement'
          ? 8.9375
          : 18.9375}rem
  );
  color: ${(props) => props.theme.colors.background};
  overflow: hidden;

  ${(props) => props.theme.mq.small} {
    padding: 19vw 0;
    width: calc(
      49.3333333vw -
        ${(props) =>
          props.sector === 'alimentation'
            ? 19.7
            : props.sector === 'transport'
            ? 21.6
            : props.sector === 'logement'
            ? 18
            : 18.9375}vw
    );
  }
`
export default function Title(props) {
  return (
    <Wrapper sector={props.sector}>
      <Color color={props.sector}>{props.children}</Color>
      <White sector={props.sector}>{props.children}</White>
    </Wrapper>
  )
}
