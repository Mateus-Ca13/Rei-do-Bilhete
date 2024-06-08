import { useState } from "react"
import Form from "./Components/Form"
import PageLayout from "./Components/PageLayout"
import Ticket from "./Components/Ticket"

function App() {
  const [betList, setBetList] = useState([])
  const [betReturn, setBetReturn] = useState(1)

  return (
    <PageLayout>
      <Form betList={betList} setBetList={setBetList} betReturn={betReturn} setBetReturn={setBetReturn}/>
      <Ticket betList={betList} betReturn={betReturn}/>
    </PageLayout>
  )
}

export default App
