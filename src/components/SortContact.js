import React, { Component } from 'react';

export default class SortContact extends Component {
  state = {
    sortBy: '',
    clicked: false
  };

  // handleResetSumbit = () => {
  //   const { clicked } = this.state;
  //   this.props.submitReset(clicked);
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { sortBy } = this.state;
    this.props.submitSort(sortBy);
  };

  handleChange = e => {
    this.setState({ sortBy: e.target.value });
  };

  // handleReset = () => {
  //   this.setState({ clicked: true });
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <label>
            Sort items by:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={this.state.id}>id</option>
              <option value={this.state.name}>Name</option>
            </select>
          </label>
          <input type="submit" value="Sort" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    );
  }
}
