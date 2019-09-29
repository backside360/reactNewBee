import React, { PureComponent } from 'react';
import Contact from './Contacts';
import Delete from './DeleteContact';
import AddContact from './AddContact';
import ChangeJob from './ChangeJob';
import Sort from './SortContact';

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
    const newJobContacts = [...contacts];
    const jobId = newJobContacts.findIndex(contact => contact.id === id);
    newJobContacts[jobId] = { ...newJobContacts[jobId], job: job };

    this.setState({
      contacts: newJobContacts
    });
  };

  submitNewSort = (column, type) => {
    return column, type;
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
    const createSort = (column, type) => {
      if (type === 'number') {
        return (a, b) => a[column] - b[column];
      } else if (type === 'string') {
        return (a, b) => (a[column] > b[column]) - (a[column] < b[column]);
      }
    };
    return (
      <React.Fragment>
        <Delete deleteClick={this.deleteContact} />
        <ChangeJob submitNewJob={this.submitJob} />
        <AddContact submitClick={this.submitContact} />
        <Sort
          submitSort={this.submitNewSort}
          submitReset={this.submitNewReset}
        />
        {contacts.sort(createSort(this.submitNewSort)).map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
