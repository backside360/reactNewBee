import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { id, name, job, os } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3>
          {name}{' '}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          ></i>
        </h3>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{id}</li>
            <li className="list-group-item">{job}</li>
            <li className="list-group-item">{os}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contacts.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
