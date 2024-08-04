import React from 'react';
import contact1 from '../../assets/contacts/contact1.svg';
import ContactElement from './ContactElement';


const Contacts = () => {
    const details = {
        type: "Contact us!",
        title: "Need any support for? have queries for us?",
        img: contact1,
        submit: "SUBMIT"
    }

    return (
        <ContactElement details={details} />
    )
}

export default Contacts
