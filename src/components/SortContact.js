import React, { Component } from 'react';

export default class SortContact extends Component {
  state = {
    id: 'id'
  };

  options = [
    {
      id: 'id',
      type: 'number'
    },
    {
      id: 'name',
      type: 'string'
    }
  ];

  handleResetSumbit = () => this.props.submitReset();

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.state;
    const { id: optionId, type } = this.options.find(elem => elem.id === id);
    this.props.submitSort(optionId, type);
  };

  handleChange = e => {
    this.setState({ id: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onReset={this.handleResetSumbit}>
          <label>
            Sort items by:
            <select onChange={this.handleChange}>
              {this.options.map(elem => (
                <option value={elem.id}>{elem.id}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Sort" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    );
  }
}
