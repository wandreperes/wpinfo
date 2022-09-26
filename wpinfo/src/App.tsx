import { useEffect, useState } from 'react'
import wplogo from './assets/wp.png'
import './App.css'

const PLUS = `➕`
const MENOS = `➖`

function App() {

  const UNIT_VAL = 0.15
  const QUANTITY_MIN = 10

  const [quantity, setQuantity] = useState(QUANTITY_MIN)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(() => (quantity * (UNIT_VAL * 100) / 100))

  }, [quantity])

  return (
    <div className="App">
      <div>
        <img src={wplogo} className="logo" alt="React logo" />
      </div>
      <div className='card'>
       <div style={{fontSize: 24, fontWeight: 'bold'}}> 10 cotas por R$ {UNIT_VAL}</div>
      </div>
      <div className='card'>
        <button className='plus' onClick={() => setQuantity((count) => count + 2)}>{PLUS}2</button>
        <button className='plus' onClick={() => setQuantity((count) => count + 5)}>{PLUS}5</button>
      </div>
      <div className='card'>
        <button className='plus' onClick={() => setQuantity((count) => count + 10)}>{PLUS}10</button>
      </div>
      <div className="card">
        <button className='plus1' disabled={quantity <= QUANTITY_MIN} onClick={() => setQuantity((count) => count - 1)}>{MENOS}</button>
        <div className='quantity'>{quantity}</div>
        <button className='plus1' onClick={() => setQuantity((count) => count + 1)}>{PLUS}</button>
      </div>
      <div className='card'>
        <div className='total quantity'>
          {`R$ ${total}`}
        </div>
      </div>
    </div>
  )
}

export default App
