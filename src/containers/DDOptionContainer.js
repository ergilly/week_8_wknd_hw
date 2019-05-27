import { connect } from 'react-redux';
import DDOption from '../components/DDOption';


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
  }
})
const mapStateToProps = (state) => {

  return {
    countries: state.countries.countries,
    bucketlist: state.bucketlist,
    letter: state.countries.selectedLetter
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DDOption);
