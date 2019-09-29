import React, { Component } from 'react';

export default class SortContact extends Component {
  state = {
    column: '',
    type: '',
    clicked: false
  };

  // handleResetSumbit = () => {
  //   const { clicked } = this.state;
  //   this.props.submitReset(clicked);
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { column, type } = this.state;
    this.props.submitSort(column, type);
  };

  handleChange = e => {
    this.setState({ column: e.target.value, type: e.target.name });
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
            <select onChange={this.handleChange}>
              <option value="id" name="number">
                id
              </option>
              <option value="Name" name="string">
                Name
              </option>
            </select>
          </label>
          <input type="submit" value="Sort" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    );
  }
}
