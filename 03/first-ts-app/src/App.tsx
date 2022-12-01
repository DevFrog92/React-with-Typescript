import React from 'react'
import CountryList from './components/CountryList'

type Props = {}

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};


const App = () => {
  let msg = 'React typescript'
  let list: CountryType[] = [
    { no: 1, country: "일본", visited: true },
    { no: 2, country: "미국", visited: false },
    { no: 3, country: "영국", visited: true },
    { no: 4, country: "스위스", visited: false },
  ];

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
      <CountryList countries={list} />
    </div>
  )
}

export default App