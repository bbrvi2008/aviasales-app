const initialState = {
  sortValues: [{
    value: 'Самый дешевый',
    selected: true
  }, {
    value: 'Самый быстрый',
    selected: false
  }],
  filterValues: [{
    value: 'Все',
    selected: false
  }, {
    value: 'Без пересадок',
    selected: false
  }, {
    value: '1 пересадка',
    selected: false
  }, {
    value: '2 пересадки',
    selected: false
  }, {
    value: '3 пересадки',
    selected: false
  }]
};

const reducer = (state = initialState, action) => {
  if(!action) {
    return state;
  }

  switch (action.type) {
    case 'CLICK_SORT':
      return {
        ...state,
        sortValues: state.sortValues.map(sort => {
          return {
            ...sort,
            selected: sort.value === action.payload
          }
        })
      };
    case 'CLICK_FILTER':
      return {
        ...state,
        filterValues: state.filterValues.map(filter => {
          let { selected } = filter;
          const { value } = filter;
          const { value: newValue, selected: newSelected } = action.payload;
  
          if(newValue === 'Все') {
            selected = newSelected;
          }
  
          if(newValue !== 'Все' && newValue === value) {
            selected = newSelected;
          }
  
          return {
            ...filter,
            selected
          };
        }).map((filter, index, filters) => {
          let { selected } = filter;

          if(filter.value === 'Все' && action.payload.value !== 'Все') {
            selected = filters.every(({ value: lValue, selected: lSelected }) => {
              return lValue === 'Все' || lSelected;
            });
          }
          
          return {
            ...filter,
            selected
          }
        })
      }
  
    default:
      return state;
  }
}

export default reducer;