import React from 'react';

import cn from 'classnames';

import classes from './Sorting.module.scss';

function Sorting() {
  const values = [{
    value: 'Самый дешевый',
    selected: true
  }, {
    value: 'Самый быстрый',
    selected: false
  }];
  
  const elements = values.map(({ value, selected }) => {
    const className = cn(classes.item, {
      [classes['item--selected']]: selected
    });

    return (
      <li className={ className } key={value} >{value}</li>
    )
  });

  return (
    <ul className={ classes.list }>{elements}</ul>
  );
}

export default Sorting;