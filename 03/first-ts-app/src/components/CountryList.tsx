import React from 'react'
import CountryItem from './CountryItem';
import { CountryType } from "../App";

const CountryList = ({ countries }: {countries: CountryType[]}) => {
  const list = countries;
  let counties = list.map(item => {
    return (
      <CountryItem key={item.no} countryItem={item}/>
    )
  });


  return <ul className='list-group'>{counties}</ul>
};

export default CountryList;
