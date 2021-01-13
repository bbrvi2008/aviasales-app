import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions/filtering';

import Checkbox from '../Checkbox';

import classes from "./TicketFilter.module.scss";

const TicketFilter = ({ values, clickFilter }) => {
  const inputs = values.map(({ value, selected }) => {
    return (
      <Checkbox 
        value={ value } 
        checked={selected} 
        className={ classes.checkbox } 
        key={ value }
        onChange={(checked) => {
          clickFilter({
            value,
            selected: checked
          });
        }} />
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

TicketFilter.defaultProps = {
  values: [],
  clickFilter: () => null
};

TicketFilter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    selected: PropTypes.bool
  })),
  clickFilter: PropTypes.func
};

const mapStateToProps = ({ filterValues }) => {
  return {
    values: filterValues
  }
};

export default connect(mapStateToProps, actions)(TicketFilter);