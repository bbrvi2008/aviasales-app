import React from 'react';

import classes from './Tiket.module.scss';
import logo from '../../images/s7-logo.png';

const Tiket = () => {
  const data = {
    price: "88 145",
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2021-01-16T04:40:00.000Z",
        stops: [
          "HKG",
          "BKK",
          "SIN"
        ],
        duration: 1137
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2021-02-05T01:55:00.000Z",
        stops: [
          "BKK",
          "KUL",
          "SHA"
        ],
        duration: 1560
      }
    ]
  };

  const { price } = data;
  const rows = data.segments.map(({ origin, destination, stops }) => {
    const title = `${origin} - ${destination}`;

    return (
      <table className={classes.path} key={title} >
        <tbody>
          <tr>
            <th className={classes.path__title} >{title}</th>
            <th className={classes.path__title} >В пути</th>
            <th className={classes.path__title} >{`${stops.length} пересадки`}</th>
          </tr>
          <tr>
            <td className={classes.path__text} >10:20 - 00:50</td>
            <td className={classes.path__text} >13ч 30м</td>
            <td className={classes.path__text} >{stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    )
  })

  return (
    <article className="tiket">
      <header className={classes.header} >
        <h2 className={classes.price} >{`${price} р`}</h2>
        <img src={logo} alt="Логотип" />
      </header>
      {rows}
    </article>
  );
}

export default Tiket;