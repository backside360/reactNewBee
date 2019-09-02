import React, { Component } from 'react';
import Contact from './Contacts';
import Delete from './DeleteContact';

export default class ContactState extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Oleg',
        job: 'junior frontend',
        os: 'macOS'
      },
      {
        id: 2,
        name: 'Misha',
        job: 'SAP architect',
        os: 'Win7'
      }
    ]
  };

  // deleteContact = () => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(
  //     contact => contact.id !== this.idValue.value
  //   );

  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <Delete deleteClick={this.deleteContact} />
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
