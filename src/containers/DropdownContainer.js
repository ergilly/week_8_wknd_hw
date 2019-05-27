import { connect } from 'react-redux';
import Dropdown from '../components/Dropdown';


const mapDispatchToProps = (dispatch) => ({

  getCountry(country) {
    dispatch(() => {
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
      .then(bucketlist => {
        bucketlist[0].visited = false
        dispatch({
          type: 'ADD_BUCKET',
          bucketlist: bucketlist[0]
        })
      })
    })
  },
  selectLetter(letter) {
    dispatch({
      type: 'CHANGE_LETTER',
      letter
    });
  }

})
const mapStateToProps = (state) => {

  return {
    countries: state.countries.countries,
    bucketlist: state.bucketlist,
    letter: state.countries.selectedLetter
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
