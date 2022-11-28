import React from 'react'

type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};


const CountryList = () => {
  let list: CountryType[] = [
    { no: 1, country: "일본", visited: true },
    { no: 2, country: "미국", visited: false },
    { no: 3, country: "영국", visited: true },
    { no: 4, country: "스위스", visited: false },
  ];

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
