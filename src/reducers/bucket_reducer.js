const bucketReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BUCKET':
      return [...state, action.bucketlist]
    case 'VISIT':
      return state.map(country => {
        if (country.name === action.country) {
          let newCountry = {...country, visited: true}
          return newCountry
        }
        return country;
      })
    default:
      return state;
    }
  };

  export default bucketReducer;
