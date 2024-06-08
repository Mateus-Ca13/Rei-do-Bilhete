import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import ResetBetButton from '../ResetBetButton'

const StyledForm = styled.form`
border: 2px solid var(--grey2);
padding: 1em;
border-radius: 15px;
width: 90%;
max-width: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.4em;

h3 {
    color: var(--green2);
    font-weight: 700;
    margin: 0;
}

label {
    color: var(--grey3);
    font-size: 12px;
}

button {
    font-size: 12px;
    font-family: var(--font);
    font-weight: 700;
    background-color: var(--green2);
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
}

.resetTicketButton {
    background-color: var(--red);
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
}
`

export default function Form({ betList, setBetList, betReturn, setBetReturn}) {
    const [expectedResult, setExpectedResult] = useState("")
    const [betMarket, setBetMarket] = useState("")
    const [odd, setOdd] = useState("")
    
    function handleBetSubmit (e) {
        e.preventDefault();
        if(odd.length > 0 && betMarket.length > 0 && expectedResult.length > 0) {
            setBetList([...betList, {
                expectedResult: expectedResult,
                betMarket: betMarket,
                odd: odd
            } ])
            setBetReturn(betReturn * odd);
            setExpectedResult("");
            setOdd("");
            setBetMarket("");
        }else {
            alert("Algum dos inputs não tem dados válidos")
        }}
  return (
    <StyledForm>
        <h3>Criar Aposta</h3>
        <label>Resultado Esperado</label>
        <Input value={expectedResult} func={setExpectedResult} type={"text"} placeholder={"EX: Mais de 0,5 / Sim / Menos de 3,5 "}/>
        <label>Mercado da aposta</label>
        <Input value={betMarket} func={setBetMarket}  type={"text"} placeholder={"EX: Chutes a gol / Desarmes / Gols na partida"}/>
        <label>Odd da Aposta</label>
        <Input value={odd} func={setOdd}  type={"number"} placeholder={"EX: 1.21 / 1.5 / 3"}/>
        <span className='buttons'>
            <button className='resetTicketButton'>Resetar Bilhete</button>
            <button onClick={(e)=>{handleBetSubmit(e)}}>Adicionar Aposta</button>
        </span>
        
    </StyledForm>
  )
}
