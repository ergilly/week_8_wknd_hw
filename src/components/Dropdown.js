import React, {Component} from "react";
import DDOption from "./DDOption";
import './bucketlist.css';


class Form extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.createLetters = this.createLetters.bind(this)
    this.handleSelectLetter = this.handleSelectLetter.bind(this)
    this.options = this.options.bind(this)
    this.showdropdown = this.showdropdown.bind(this)
  }

  handleSubmit(evt) {
    console.log(evt.target.textContent);
    let country = evt.target.textContent.toLowerCase()
    this.props.getCountry(country)
  };

  createLetters(evt) {
    let letters=("ABCDEFGHIJKLMNOPQRSTUVWYZ").split("")
    return letters.map((letter, index) => {
      return <option value={letter} key={index} onClick={() => {this.handleSelectLetter(letter)}} className='selectedLetter'>{letter}</option>
    });
  }

  handleSelectLetter(letter) {
    this.props.selectLetter(letter)
  }

  options() {
    console.log(this.handleSubmit);
    if (this.props.letter === null) {
      return this.props.countries.map((element, index) => {
        return <DDOption info={element.name} flag={element.alpha2Code} key={index} handleSubmit={this.handleSubmit}/>;
      });
    } else {
      let countriesArray = []
      this.props.countries.forEach((country, index) => {
        let name = country.name.slice(0,1)
        if (name === this.props.letter) {
          let newCountry = {name: country.name, flag: country.alpha2Code, index: index}
          countriesArray.push(newCountry)
        }
      })
      console.log(countriesArray);
      return countriesArray.map((element, index) => {
        console.log(element);
        return <DDOption info={element.name} flag={element.flag} key={index} handleSubmit={this.handleSubmit}/>;
      });

    }
  };
  showdropdown() {
    const drop= document.querySelector('.menu');
    if (drop.style.display === 'none') {
      drop.style.display = 'block'
    } else {
      drop.style.display = 'none'
    }
  }

  render() {
  return (
    <div className='heading'>
      <div className='underline'>Filter dropdown by first letter of country!</div>
      <div className='flex'>
        {this.createLetters()}
      </div>
      <div className="ui fluid search selection dropdown" onClick={this.showdropdown}>
        <input type="hidden" name="country"/>
        <i className="dropdown icon"></i>
        <div className="default text">Select Country</div>
        <div id='front' className="menu">
          {this.options()}
        </div>
      </div>
    </div>
  )
}
};

export default Form;
