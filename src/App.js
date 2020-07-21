import React, { Component } from 'react';
import { fetchData } from './API.utils.js';
import CardContainer from './components/CardContainer/CardContainer';
import CountryPick from './components/CountryPick/CountryPick';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      country: ''
    };
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container" >
        <h1> Covid-19 Tracker </h1>
        <CardContainer data={data} />
        <CountryPick handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
