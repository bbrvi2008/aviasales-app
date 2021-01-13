import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../actions/ticketList';

import Ticket from '../Ticket';

import ticketListClasses from './TiketList.module.scss';

const TicketList = ({ tickets, loadingTickets }) => {
  useEffect(() => {
    loadingTickets()
  }, [loadingTickets]);

  const elements = tickets.map(ticket => {
    return (
      <li className={ticketListClasses.item} key={ JSON.stringify(ticket) } >
        <Ticket ticket={ ticket } />
      </li>
    )
  });

  return (
    <ul className={ticketListClasses.list} >{elements}</ul>
  );
}

TicketList.defaultProps = {
  tickets: [],
  loadingTickets: () => null
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  loadingTickets: PropTypes.func
};

const mapStateToProps = ({ tickets }) => {
  return {
    tickets
  };
};

export default connect(mapStateToProps, actions)(TicketList);