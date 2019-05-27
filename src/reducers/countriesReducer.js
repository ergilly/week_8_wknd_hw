const countriesReducer = (state = {countries: [], selectedLetter: null}, action) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
        return {countries: [...state.countries, ...action.countries], selectedLetter: state.selectedLetter}
    case 'CHANGE_LETTER':
      let newletter = action.letter;
      return {countries: state.countries, selectedLetter: newletter}

    default:
        return state;
    }
  };

export default countriesReducer;
