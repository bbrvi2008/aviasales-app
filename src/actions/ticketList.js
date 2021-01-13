export const loadedTickets = (tickets) => ({ type: 'LOADED_TICKETS', payload: tickets });

export const loadingTickets = () => {

  return dispatch => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then(response => response.json())
      .then(({ searchId }) => {
        fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
          .then(ticketsResponse => ticketsResponse.json())
          .then(({ tickets }) => {
            dispatch(loadedTickets(tickets));
          });
      });
  }
}

export default { loadingTickets };