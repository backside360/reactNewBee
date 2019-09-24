import React, { Component } from 'react';
import Contact from './Contacts';
import Delete from './DeleteContact';
import AddContact from './AddContact';
import ChangeJob from './ChangeJob';
import Sort from './SortContact';

export default class ContactState extends Component {
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
    ]
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

  submitJob = (id, job) => {
    const { contacts } = this.state;

    const jobId = contacts.findIndex(contact => contact.id === id);
    contacts[jobId].job = job;

    this.setState({
      contacts
    });
  };

  submitNewSort = sortBy => {
    const { contacts } = this.state;
    let sortedContacts = [...contacts];
    switch (sortBy) {
      case 'id':
        sortedContacts.sort((a, b) => b.id - a.id);
        break;
      case 'Name':
        sortedContacts.sort((a, b) => a.name > b.name);
        break;
      default:
        sortedContacts.sort((a, b) => a.id - b.id);
    }
    // }

    this.setState({
      contacts: sortedContacts
    });
  };

  submitNewReset = clicked => {
    const { contacts } = this.state;
    if (clicked) {
      this.setState({
        contacts
      });
    }
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <Delete deleteClick={this.deleteContact} />
        <ChangeJob submitNewJob={this.submitJob} />
        <AddContact submitClick={this.submitContact} />
        <Sort
          submitSort={this.submitNewSort}
          submitReset={this.submitNewReset}
        />
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
