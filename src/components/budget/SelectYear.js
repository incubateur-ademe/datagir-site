import React, { useState } from 'react'
import styled from 'styled-components'
import budget from './budget.yaml'
import Select from '../base/Select'

const arraySum = (arr) => arr.reduce((a, b) => a + b, 0)

const RessourcesAllocationTable = styled.table`
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  td {
    padding: 6px;
    width: 100px;
  }

  td:not(:first-child) {
    text-align: right;
  }

  tbody tr:nth-child(odd),
  tfoot tr:nth-child(odd) {
    background: ${(props) => props.theme.colors.tile};
  }

  thead,
  tfoot {
    font-weight: bold;
  }

  tfoot tr:last-child {
    color: ${(props) => props.theme.colors.main};
  }
`

const SelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  > div {
    width: 10rem;
    margin-left: 1rem;
    margin-bottom: 0rem;
  }
`
export default function SelectYear() {
  const years = ['2020', '2021', '2022']
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
        <Select
          name={'année'}
          value={selectedYear}
          onChange={(year) => {
            setSelectedYear(year.value)
          }}
          options={years.map((year) => ({ value: year, label: year }))}
        />
      </SelectWrapper>
      <p>{budget[selectedYear]?.['description']}</p>
      <div
        css={`
          overflow: auto;
        `}
      >
        <RessourcesAllocationTable>
          <thead>
            <tr>
              <td>{selectedYear}</td>
              {products.map((q) => (
                <td key={q}>{q}</td>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {categories.map((label) => (
              <tr key={label}>
                <td>{label}</td>
                {products.map((q) => {
                  const value = budget[selectedYear]?.[q]?.[label]
                  return <td key={q}>{value ? value : '-'}</td>
                })}
                <td>
                  {arraySum(
                    products.map((q) => budget[selectedYear]?.[q]?.[label] ?? 0)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total HT</td>
              {products.map((q) => {
                const value = arraySum(
                  Object.values(budget[selectedYear]?.[q] ?? {})
                )

                return <td key={q}>{value ? value : '-'}</td>
              })}
              <td>
                {arraySum(
                  products.map((q) =>
                    arraySum(Object.values(budget[selectedYear]?.[q] ?? {}))
                  )
                )}
              </td>
            </tr>
            <tr>
              <td>Total TTC</td>
              {products.map((q) => {
                const value = Math.round(
                  arraySum(Object.values(budget[selectedYear]?.[q] ?? {})) * 1.2
                )

                return <td key={q}>{value ? value : '-'}</td>
              })}
              <td>
                {Math.round(
                  arraySum(
                    products.map(
                      (q) =>
                        arraySum(
                          Object.values(budget[selectedYear]?.[q] ?? {})
                        ) * 1.2
                    )
                  )
                )}
              </td>
            </tr>
          </tfoot>
        </RessourcesAllocationTable>
      </div>
    </>
  )
}
