import React from 'react'
import contact2 from '../../assets/contacts/contact2.svg';
import ContactElement from './ContactElement';
const Reports = () => {

    const details = {
        type: "Report Concern!",
        title: "Have concern for us?",
        img: contact2,
        submit: "Submit Concern"
    }

    return (
        <ContactElement details={details} />
    )

}

export default Reports
