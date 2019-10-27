import React, { PureComponent } from 'react';
import Contact from './Contacts';
import Delete from './DeleteContact';
import AddContact from './AddContact';
import ChangeJob from './ChangeJob';
import Sort from './SortContact';
import { createSort } from '../helpers/createSort';
import DirectionBtn from './DirectionBtn';
import ChangeName from './ChangeName';

export default class ContactState extends PureComponent {
  state = {
    contacts: [
      {
        id: '1',
        name: 'Oleg',
        job: 'junior frontend',
        os: 'macOS'
      },
      {
        id: '2',
        name: 'Misha',
        job: 'SAP architect',
        os: 'Win7'
      },
      {
        id: '3',
        name: 'Pam',
        job: 'SAP architect',
        os: 'Win7'
      },
      {
        id: '4',
        name: 'Vlad',
        job: 'SAP architect',
        os: 'Win7'
      }
    ],
    sort: {
      id: 'id',
      column: 'number'
    },
    sortDirection: true
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  submitContact = (id, name, job, os) => {
    const { contacts } = this.state;

    const updatedContacts = [...contacts, { id, name, job, os }];

    this.setState({
      contacts: updatedContacts
    });
  };

  updateName = (id, name) => {
    const { contacts } = this.state;
    const newNameContacts = [...contacts];
    const nameId = newNameContacts.findIndex(contact => contact.id === id);
    newNameContacts[nameId] = { ...newNameContacts[nameId], name: name };

    this.setState({
      contacts: newNameContacts
    });
  };

  submitJob = (id, job) => {
    const { contacts } = this.state;
    const newJobContacts = [...contacts];
    const jobId = newJobContacts.findIndex(contact => contact.id === id);
    newJobContacts[jobId] = { ...newJobContacts[jobId], job: job };

    this.setState({
      contacts: newJobContacts
    });
  };

  submitNewSort = (optionId, type) => {
    this.setState({
      sort: {
        id: optionId,
        column: type
      }
    });
  };

  submitNewReset = () => {
    this.setState({
      sort: {
        id: 'id',
        column: 'number'
      }
    });
  };

  toggleSortDirection = () =>
    this.setState({ sortDirection: !this.state.sortDirection });

  render() {
    const { contacts, sortDirection } = this.state;
    const { id, column } = this.state.sort;

    return (
      <React.Fragment>
        {this.props.canDelete ? (
          <Delete deleteClick={this.deleteContact} />
        ) : null}
        <ChangeJob submitNewJob={this.submitJob} />
        <ChangeName submitNewName={this.updateName} />
        <AddContact submitClick={this.submitContact} />
        <Sort
          submitSort={this.submitNewSort}
          submitReset={this.submitNewReset}
        />
        <DirectionBtn
          toggleSortDirection={this.toggleSortDirection}
          direct={sortDirection}
        />

        {contacts.sort(createSort(id, column, sortDirection)).map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
