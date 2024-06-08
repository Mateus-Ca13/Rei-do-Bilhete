
import styled from 'styled-components'
import TickeBet from '../TicketBet'

const StyledTicket = styled.section`
background-color: var(--grey2);
box-shadow: 1px 1px 10px 1px var(--shadow);
border-radius: 5px;
width: 98%;
max-width: 520px;
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em ;
    color: var(--green2);
    border-bottom: 1px solid var(--grey3);

    .edit p {
        font-size: 0.7em;
        font-weight: 600;
    }

    .betList {
        display: flex;
        gap: 0.4em;
        margin-right: 3em;

        p {
            margin:0;
        }
    }
}

.body, .footer {
    padding: 0.6em 1em 0 1em;
}

.warning {
    text-align: center;
    margin: 0.5em 0 1em 0;
    color: var(--grey3);
}
.footer {
 border-top: 1px solid var(--grey3);
 color: var(--white);
 display: flex;
 justify-content: space-between;
 padding-bottom: 0.5em;
 
    p {
        margin: 0.2em;
    }
    .bet {
        font-size: 10px;
        font-weight: 400;
    }

    .value {
        font-size:12px;
    }
}
`

export default function Ticket({betList, betReturn}) {
  return (
    <StyledTicket>
        <div className='header'>
            <span className='betList'>
                <p>R$10.00</p>
                <p>{betList.length <= 1 ? "Simples": betList.length == 2 ? "Dupla": betList.length == 3 ? "Tripla" : `Múltipla de ${betList.length}`}</p>
            </span>
            <span className='edit'>
                <p>Editar Aposta</p>
            </span>
        </div>
        <div className='body'>
            {betList.length > 0 ? betList.map((bet, index) => {return <TickeBet key={index} bet={bet}/>}) : <p className='warning'>Insira alguma aposta!</p>}
        </div>
        <div className='footer'>
            <span>
                <p className='bet'>Aposta</p>
                <p className='value'>R$10.00</p>
            </span>
            <span>
                <p className='bet'>Retornos</p>
                <p className='value'>R${(10*betReturn).toFixed(2)}</p>
            </span>
        </div>
    </StyledTicket>
  )
}
