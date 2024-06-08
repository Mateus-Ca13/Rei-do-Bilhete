import React from 'react'
import styled from 'styled-components'
import { FaCircle } from "react-icons/fa";

const StyledTicket = styled.div`
display: flex;
justify-content: space-between;
font-size: 14px;
padding: 0.5em 0 1em;

p{
  margin: 0 0 0.5em ;
  line-height: 1em;
}

.resultSpan {
  justify-content: left;
  display: flex;
  align-items: start;;
  gap: 0.5em;

 .result {
  color: var(--white);
}
.icon {
  color: var(--grey3)
}}

.market {
  font-size: 10px;
  font-weight: 600;
  color: var(--grey3)
}

.odd {
color: var(--white);
font-weight: 500;
}


`

export default function TickeBet({ bet }) {
  return (
    <StyledTicket>
    <span className='resultSpan'>
    <FaCircle className='icon'/>
      <span> 
      <p className='result'>{bet.expectedResult}</p>
      <p className='market'>{bet.betMarket}</p>
      </span>

   
    </span>
    
    <span className='odd'><p>{Number(bet.odd).toFixed(2)}</p></span>
    </StyledTicket>
  )
}
