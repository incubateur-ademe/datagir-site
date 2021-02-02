import React from 'react'
import styled from 'styled-components'

import Dropdown from './menu/Dropdown'
import Item from './menu/Item'

const Wrapper = styled.div`
  display: flex;
  font-size: 0.875em;
`
export default function Menu() {
  return (
    <Wrapper>
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
        options={[
          { label: 'Nos Gestes Climat', to: '/alimentation' },
          { label: 'Mon Impact Transport', to: '/transport' },
          { label: 'Mes Fruits et Légumes de Saison', to: '/logement' },
          { label: 'Mon Convertisseur CO2', to: '/convertisseur' },
        ]}
      />
      <Dropdown
        title={'Jeux de données'}
        options={[
          { label: 'Base Carbone', to: '/databases/basecarbone' },
          { label: 'Agribalyse', to: '/databases/agribalyse' },
        ]}
      />
      <Item to={'/about'}>Datagir</Item>
      <Item to={'/blog'}>Blog</Item>
      <Item to='documentation'>Documentation</Item>
    </Wrapper>
  )
}
