import React, {Component} from 'react';
import { connect } from 'react-redux';
import DropdownContainer from './containers/DropdownContainer.js'
import BucketlistContainer from './containers/BucketlistContainer.js'
import './App.css';



class App extends Component {

  componentDidMount() {

    this.props.getCountries();
  }

  render() {
    return (
      <div className="App">
        <h1>Bucketlist App</h1>
        <DropdownContainer />
        <div className='grid'>
          <h2>Your BucketList:</h2>
          Click to scratch out countries you've visited!
          <BucketlistContainer />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCountries() {
    dispatch(() => {
      fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(countries => {
        dispatch({
          type: 'ADD_COUNTRIES',
          countries
        })
      })
    })
  }
})



export default connect(null, mapDispatchToProps)(App);
