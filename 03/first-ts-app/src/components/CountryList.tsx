import React from 'react'
import { CountryType } from "../App";

const CountryList = ({ countries }: {countries: CountryType[]}) => {
  let list = countries;

  // 타입을 명시하지 않아도 타입추론이 된다.
  let counties = list.map((item, index) => {
    return (
      <li key={item.no}
        className={item.visited ? 'list-group-item active' : 'list-group-item'}>
        {item.country}
      </li>
    )
  });


  return <ul className='list-group'>{counties}</ul>
};

export default CountryList;
