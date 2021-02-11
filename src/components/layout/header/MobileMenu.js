import React from 'react'
import styled from 'styled-components'

import Dropdown from './mobileMenu/Dropdown'
import Item from './mobileMenu/Item'

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
  transition: ${(props) => (props.open ? 'opacity 600ms' : 'none')};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${(props) => (props.open ? '100%' : 0)};
    height: 100%;
    background-color: ${(props) => props.theme.colors.main};
    transform: scaleX(${(props) => (props.open ? 0.66 : 1)});
    transform-origin: left;

    transition: ${(props) =>
      props.open
        ? 'width 350ms ease-in-out 300ms, transform 350ms ease-in-out 650ms'
        : 'none'};

    ${(props) => props.theme.mq.small} {
      transform: scaleX(${(props) => (props.open ? 0.6 : 1)});
    }
  }
`
const Content = styled.div`
  position: absolute;
  z-index: 5;
  top: 25%;
  right: calc(34vw + 1rem);
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ${(props) => (props.open ? 'opacity 0ms 300ms' : 'none')};
  ${(props) => props.theme.mq.small} {
    right: calc(40vw + 1rem);
  }
`
const Secondary = styled.div`
  position: absolute;
  top: 65%;
  left: calc(66vw + 1rem);
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: ${(props) => (props.open ? 'opacity 0ms 650ms' : 'none')};

  ${(props) => props.theme.mq.small} {
    left: calc(60vw + 1rem);
  }
`
export default function MobileMenu(props) {
  return (
    <Wrapper open={props.open}>
      <Content open={props.open}>
        <Dropdown
          title={'Secteurs'}
          options={[
            { label: 'Alimentation', to: '/alimentation' },
            { label: 'Transport', to: '/transport' },
            { label: 'Logement', to: '/logement' },
          ]}
        />
        <Dropdown
          title={'Simulateurs'}
          options={props.data.applications.edges.map((page) => ({
            label: page.node.frontmatter.title,
            to: `/apps${page.node.fields.slug}`,
          }))}
        />
      </Content>
      <Secondary open={props.open}>
        <Item to={'/jeux-de-donnees'}>Jeux de données</Item>

        <Item to={'/qui-sommes-nous'}>Qui sommes nous</Item>
        <Item to={'/blog'}>Blog</Item>
        <Item to={'https://datagir.gitbook.io/documentation/'}>
          Documentation
        </Item>
      </Secondary>
    </Wrapper>
  )
}
