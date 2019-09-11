import React, { Component } from 'react';

export default class SortContact extends Component {
  state = {
    sortBy: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { sortBy } = this.state;
    this.props.submitSort(sortBy);
  };

  handleChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sort items by:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={this.state.id}>Id</option>
              <option value={this.state.name}>Name</option>
            </select>
          </label>
          <input type="submit" value="Sort" />
        </form>
      </div>
    );
  }
}
