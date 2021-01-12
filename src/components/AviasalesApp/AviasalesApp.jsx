import React from 'react';

import cn from 'classnames';

import TiketSorter from '../TiketSorter';
import TiketList from '../TiketList';
import TiketFilter from "../TiketFilter";

import classes from './AviasalesApp.module.scss';

import logo from '../../images/logo.svg';

const AviasalesApp = () => {
  return (
    <div className={ classes.container } >
      <header className={ cn([ classes['content-wrapper'], classes.header ]) } >
        <img src={logo} alt="logo" className={ classes.logo } />
      </header>

      <div className={ cn([ classes['content-wrapper'], classes.content ]) } >
        <aside className={ classes.sidebar } >
          <TiketFilter />
        </aside>
        <main className={ classes.main } >
          <TiketSorter />
          <TiketList />
        </main>
      </div>
    </div>
  );
}

export default AviasalesApp;