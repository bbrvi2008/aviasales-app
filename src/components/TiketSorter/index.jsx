import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../actions/sorting';

import RadioGroup from '../RadioGroup';

const TiketSorter = ({ values, clickSort }) => (
  <>
    <RadioGroup groupName="ticket-sorting" values={values} onChange={clickSort} />
  </>
);

TiketSorter.defaultProps = {
  values: [],
  clickSort: () => null
};

TiketSorter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    selected: PropTypes.bool
  })),
  clickSort: PropTypes.func
};

const mapStateToProps = ({ sortValues }) => {
  return {
    values: sortValues
  }
}

export default connect(mapStateToProps, actions)(TiketSorter);