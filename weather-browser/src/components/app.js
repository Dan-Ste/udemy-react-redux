import React, { Component } from 'react';
import SearchBar from '../containers/Searchbar'
import WeatherList from '../containers/WeatherList'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
