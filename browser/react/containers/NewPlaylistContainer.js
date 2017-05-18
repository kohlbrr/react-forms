'use strict';

import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios'

class NewPlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      buttonDisabled: true,
      warningDisplay: "",
      warningMessage: "Please enter a name"
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
    if (inputValue.length > 0 && inputValue.length <= 16 && this.state.buttonDisabled === true) {
      this.setState({buttonDisabled: false, warningDisplay: "none"})
    } else if (inputValue.length > 16) {
      this.setState({buttonDisabled: true, warningDisplay: "", warningMessage: "Name cannot be greater than 16 characters"})
    } else if (inputValue.length === 0) {
      this.setState({ buttonDisabled: true, warningDisplay: "", warningMessage: "Please enter a name"})
    }
  }
      
  handleSubmit(event) {
    console.log("daasd", this.props)
    event.preventDefault();
    const submitValue = this.state.inputValue;
    this.props.addPlaylist(submitValue)
    this.setState({ inputValue: ''})
    this.setState({ buttonDisabled: true, warningDisplay: "", warningMessage: "Please enter a name"})
  }


  render() {
    return (
      <div>
        <NewPlaylist
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          buttonDisabled={this.state.buttonDisabled}
          warningDisplay={this.state.warningDisplay}
          warningMessage={this.state.warningMessage}
        />
      </div>
    );
  }
}

export default NewPlaylistContainer;
