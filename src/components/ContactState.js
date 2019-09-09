import React, { Component } from 'react';
import Contact from './Contacts';
import Delete from './DeleteContact';
import AddContact from './AddContact';
import ChangeJob from './ChangeJob';

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
        name: 'Misha',
        job: 'SAP architect',
        os: 'Win7'
      },
      {
        id: '4',
        name: 'Misha',
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

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <Delete deleteClick={this.deleteContact} />
        <ChangeJob submitNewJob={this.submitJob} />
        <AddContact submitClick={this.submitContact} />
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
