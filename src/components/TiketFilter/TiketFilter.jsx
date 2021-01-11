import React from 'react';

import Checkbox from '../Checkbox';

import classes from "./TiketFilter.module.scss";

const TiketFilter = () => {
  const values = [ 'Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки' ];
  const inputs = values.map(value => {

    return (
      <Checkbox  value={ value } className={ classes.checkbox } key={ value } />
    );
  });


  return (
    <div className={ classes.container } >
      <h2 className={ classes.title } >Количество пересадок</h2>
      <div>
        {inputs}
      </div>

    </div>
  );
}

export default TiketFilter;