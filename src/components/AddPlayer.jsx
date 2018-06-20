import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  addPlayer(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
