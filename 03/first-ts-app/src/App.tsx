import React from 'react'
import CountryList from './components/CountryList'

type Props = {}

const App = (props: Props) => {
  let msg = 'React typescript'
  const addResult = (x: number, y: number) => {
    return (
      <div className='card card-body bg-light mb-3'>
        {x} + {y} = {x+y}
      </div>
    )
  }

  return (
    <div className='container'>
      <h2>Hello {msg}!</h2>
      <hr className='dash-style' />
      {addResult(4, 3)}
      <CountryList/>
    </div>
  )
}

export default App