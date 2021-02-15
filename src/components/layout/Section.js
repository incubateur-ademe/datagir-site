import styled from 'styled-components'

const Section = styled.section`
  max-width: ${(props) => (props.small ? '36.5rem' : 'none')};
  margin: 0 ${(props) => (props.small ? 'auto' : 0)} 5.5rem;
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
