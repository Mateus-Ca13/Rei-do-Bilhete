import React from 'react'
import styled from 'styled-components'

const StyledResetButton = styled.button`
 font-size: 12px;
    font-family: var(--font);
    font-weight: 700;
    background-color: var(--red);
    border-radius: 10px;
    border: none;
    padding: 0.5em 1.5em;
    margin-top: 0.3em;
    color: var(--white);
    transition: 0.3s all;

    &:active {
        opacity: 0.7;
        transition: 0.3s all;
    }
`

export default function ResetBetButton({ setBetList, betList }) {

    
    function ResetBetButton (e) {
    }

  return (
    <StyledResetButton onClick={(e) => ResetBetButton(e)}>Resetar Bilhete</StyledResetButton>
  )
}
