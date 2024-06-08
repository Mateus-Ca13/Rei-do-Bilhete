import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
border-radius: 10px;
padding: 0.4em 1em;
font-family: var(--font);
font-weight: 700;
width: 95%;
background-color: var(--white);

&::placeholder {
    color: var(--green1)
}
`

export default function Input({type, placeholder, func, value}) {
  return (
    <StyledInput  value={value} onChange={(e) => func(e.currentTarget.value)} type={type} placeholder={placeholder}></StyledInput>
  )
}
