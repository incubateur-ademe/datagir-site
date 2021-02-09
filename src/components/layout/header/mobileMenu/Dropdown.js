import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.33333333vw;
  text-align: right;
`
const Title = styled.div`
  margin-bottom: 0.5rem;
  font-size: 3.99999999vw;
  font-weight: 700;
  color: ${(props) => props.theme.colors.background};

  &:before {
    content: ${(props) => (props.open ? "'ˆ'" : "'ˇ'")};
    position: relative;
    top: 0.4em;
    margin-right: 0.2em;
    font-weight: 700;
  }

  ${(props) => props.theme.mq.small} {
    font-size: 6vw;
  }
`
const Menu = styled.nav`
  margin-bottom: 2vw;
`
const Option = styled(Link)`
  display: block;
  padding: 0 0.75em 0.75em 0;
  font-size: 2.66666666vw;
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  word-break: keep-all;

  ${(props) => props.theme.mq.small} {
    font-size: 4vw;
  }
`
export default function Dropdown(props) {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Title open={open} onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {props.title}
      </Title>
      {open && (
        <Menu length={props.options.length}>
          {props.options.map((option, index) => (
            <Option key={option.to} to={option.to} index={index}>
              {option.label.replace(/ /g, '\u00a0')}
            </Option>
          ))}
        </Menu>
      )}
    </Wrapper>
  )
}
