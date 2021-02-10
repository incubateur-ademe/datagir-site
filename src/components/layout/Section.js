import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 5.5rem;
`

Section.Title = styled.h2`
  font-size: 2.5em;

  ${(props) => props.theme.mq.small}  {
    font-size: 1.75em;
  }
`
Section.Sector = styled.span`
  color: ${(props) => props.theme.colors[props.color]};
`

export default Section
