import { useEffect, useState } from 'react'
import wplogo from './assets/wp.png'
import iphone from './assets/iphone.jpeg'
import './App.css'

const PLUS = `➕`
const MENOS = `➖`

const utils = {
  soma: async (val1: number, val2: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(val1 + val2)
      }, 2000)
    })
  },
  subtract: async (val1: number, val2: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(val1 - val2)
      }, 2000)
    })
  },
}

// utils
//   .soma(20, 50)
//   .then(data => console.log(data))
//   .catch(data => console.log(data))

// utils
//   .subtract(50, 20)
//   .then(data => console.log(data))
//   .catch(data => console.log(data))

const valor1: string = '1.121.25'
const valor2: string = '2.052.39'

// utils
//   .soma(parseFloat(valor1), parseFloat(valor2))
//   .then(data => console.log(data))

// console.log(utils.soma(50, 25))

function App() {
  const UNIT_VAL = 15
  const QUANTITY_MIN = 1

  const [quantity, setQuantity] = useState(QUANTITY_MIN)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(() => (quantity * (UNIT_VAL * 100)) / 100)
  }, [quantity])

  return (
    <div className='App'>
      <div className='content'>
        <img src={iphone} className='logo' />
        <div
          style={{
            borderRadius: '0 0 15px 15px',
            backgroundColor: 'lightgray',
            color: 'black',
            textAlign: 'left',
            padding: '15px',
            lineHeight: 0.1,
          }}
        >
          <h3>iPhone 14</h3>
          <p>Pro Max Ultra High Mega Power Blaster</p>
        </div>
      </div>
      <div className='content'>
        <div
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            // border: 'solid',
            // borderRadius: 20,
            padding: 10,
            backgroundColor: 'green',
            marginBottom: 15,
            borderRadius: '15px 15px 0 0',
          }}
        >
          {QUANTITY_MIN > 1
            ? `${QUANTITY_MIN} cotas por R$ ${UNIT_VAL}`
            : `Uma cota por R$ ${UNIT_VAL} `}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button
            className='plus'
            onClick={() => setQuantity(count => count + 2)}
          >
            {PLUS}2
          </button>
          <button
            className='plus'
            onClick={() => setQuantity(count => count + 5)}
          >
            {PLUS}5
          </button>
          <button
            className='plus'
            onClick={() => setQuantity(count => count + 10)}
          >
            {PLUS}10
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            marginBottom: 10,
          }}
        >
          <button
            className='plus1'
            disabled={quantity <= QUANTITY_MIN}
            onClick={() => setQuantity(count => count - 1)}
          >
            {MENOS}
          </button>
          <div
            style={{
              padding: 10,
              fontSize: 38,
              fontWeight: 'bold',
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {quantity}
          </div>
          <button
            className='plus1'
            onClick={() => setQuantity(count => count + 1)}
          >
            {PLUS}
          </button>
        </div>
        <div
          style={{
            // borderRadius: 15,
            backgroundColor: 'lightblue',
            padding: 10,
            borderRadius: '0 0 15px 15px',
          }}
        >
          <div
            style={{
              padding: 10,
              fontSize: 38,
              fontWeight: 'bold',
              color: 'darkgreen',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {`Total R$ ${total}`}
          </div>
          <button
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              border: 'solid',
              borderRadius: 20,
              padding: 10,
              backgroundColor: 'green',
            }}
          >
            Participar do sorteio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
