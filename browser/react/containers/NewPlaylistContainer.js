'use strict';

import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }
  handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  render() {
    return (
      <div>
        <NewPlaylist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default NewPlaylistContainer;
