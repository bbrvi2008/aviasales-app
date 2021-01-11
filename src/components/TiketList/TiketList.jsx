import React from 'react';

import Tiket from '../Tiket';

import ticketListClasses from './TiketList.module.scss';


const TiketList = () => {
  const tikets = [1, 2, 3, 4, 5, 6];

  const elements = tikets.map(tiket => {

    return (
      <li id={tiket} className={ticketListClasses.item} key={tiket} >
        <Tiket />
      </li>
    )
  });

  return (
    <ul className={ticketListClasses.list} >{elements}</ul>
  );
}

export default TiketList;