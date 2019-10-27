import React, { Component } from 'react';

export default class DirectionBtn extends Component {
  handleClick = () => this.props.toggleSortDirection();

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onClick={this.handleClick}
          id="desc"
          checked={this.props.direct}
        />
        <label for="desc">направление</label>
      </div>
    );
  }
}
