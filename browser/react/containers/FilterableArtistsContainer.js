'use strict';

import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });

  }
  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default FilterableArtistsContainer;
