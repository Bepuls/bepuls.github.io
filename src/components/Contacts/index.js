import React from 'react';
import Contact from '../Contact';
import './style.css';
import '../app.css';

const Contacts = (props) => (
  <div className="contacts-div box-border mx-auto text-center">
    <div className="contact-group mx-auto text-center">
      {props.contactList.map(contact => (
        <Contact key={contact.id} class={contact.class} name={contact.name} icon={contact.icon} url={contact.url} />
      ))}
    </div>

  </div>   
)

export default Contacts;