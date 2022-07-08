import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: auto;
`
const Table = styled.table`
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  td {
    padding: 0.375rem;
    width: 6.25rem;
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
const arraySum = (arr) => arr.reduce((a, b) => a + b, 0)

export default function RessourcesAllocationTable(props) {
  const products = Object.keys(props.budget[props.selectedYear]).filter(
    (elt) => elt !== 'description'
  )
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <td>{props.selectedYear}</td>
            {products.map((q) => (
              <td key={q}>{q}</td>
            ))}
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {props.categories.map((label) => (
            <tr key={label}>
              <td>{label}</td>
              {products.map((q) => {
                const value = props.budget[props.selectedYear]?.[q]?.[label]
                return <td key={q}>{value ? value : '-'}</td>
              })}
              <td>
                {arraySum(
                  props.products.map(
                    (q) => props.budget[props.selectedYear]?.[q]?.[label] ?? 0
                  )
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
                Object.values(props.budget[props.selectedYear]?.[q] ?? {})
              )

              return <td key={q}>{value ? value : '-'}</td>
            })}
            <td>
              {arraySum(
                props.products.map((q) =>
                  arraySum(
                    Object.values(props.budget[props.selectedYear]?.[q] ?? {})
                  )
                )
              )}
            </td>
          </tr>
          <tr>
            <td>Total TTC</td>
            {products.map((q) => {
              const value = Math.round(
                arraySum(
                  Object.values(props.budget[props.selectedYear]?.[q] ?? {})
                ) * 1.2
              )

              return <td key={q}>{value ? value : '-'}</td>
            })}
            <td>
              {Math.round(
                arraySum(
                  props.products.map(
                    (q) =>
                      arraySum(
                        Object.values(
                          props.budget[props.selectedYear]?.[q] ?? {}
                        )
                      ) * 1.2
                  )
                )
              )}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Wrapper>
  )
}
