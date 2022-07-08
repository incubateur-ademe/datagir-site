import React, { useState } from 'react'
import styled from 'styled-components'

import budget from './budget.yaml'
import Select from 'components/base/Select'
import RessourcesAllocationTable from './selectYear/RessourcesAllocationTable'

const SelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
`
const StyledSelect = styled(Select)`
  width: 10rem;
  margin-left: 1rem;
  margin-bottom: 0;
`
export default function SelectYear() {
  const years = Object.keys(budget)
  const products = ['Nos Gestes Climat', 'Autres produits']
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1])
  const categories = [
    ...new Set(
      products
        .map((q) => Object.keys(budget[selectedYear]?.[q] ?? {}))
        .reduce((acc, curr) => [...acc, ...curr], [])
    ),
  ]
  return (
    <>
      <SelectWrapper>
        <b>Année :</b>
        <StyledSelect
          name={'année'}
          value={selectedYear}
          onChange={(year) => {
            setSelectedYear(year.value)
          }}
          options={years.map((year) => ({ value: year, label: year }))}
        />
      </SelectWrapper>
      <p>{budget[selectedYear]?.['description']}</p>
      <RessourcesAllocationTable
        selectedYear={selectedYear}
        budget={budget}
        products={products}
        categories={categories}
      />
    </>
  )
}
