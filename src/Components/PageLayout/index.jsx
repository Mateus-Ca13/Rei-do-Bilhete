import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.main`
margin: 2em 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2em;
`

export default function PageLayout( { children }) {
  return (
    <StyledPage>
        {children}
    </StyledPage>
  )
}
