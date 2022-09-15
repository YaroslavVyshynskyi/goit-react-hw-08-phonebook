import React, { useState } from "react";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid';
import MoonLoader from 'react-spinners/MoonLoader';
import { useCreateContactMutation, useFetchContactsQuery } from "slice/contactsSlice";

import css from "./ContactForm.module.css"

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [createContact, { isLoading }] = useCreateContactMutation();
    const { data: contacts = [] } = useFetchContactsQuery();
    
    const onSubmit = data => {
        const existingContactsNames = contacts.map(({ name }) => name.toLowerCase());
        if (existingContactsNames.includes(data.name.toLowerCase())) {
            toast.info(`${data.name} is already in contacts`)
            return
        }
    
        const contact = {
            name: data.name,
            number: data.number,
            id: nanoid()
        };
    
        createContact(contact);
    };

    const handleNameChange = e => {
        setName(e.currentTarget.value);
    };

    const handleNumberChange = e => {
        setNumber(e.currentTarget.value);
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });
        reset();
    }

    return (
        <div className={css.contactsForm__container}>
            <h1 className={css.addContact__title}>PHONEBOOK</h1>
            <form onSubmit={handleSubmit} className={css.contactsForm}>
                <label className={css.contactsForm__label}>
                    <span className={css.contactsForm__text}>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Ishvan"
                        onChange={handleNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.contactsForm__input} 
                    />
                </label>
                <label className={css.contactsForm__label}>
                    <span className={css.contactsForm__text}>Number</span>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        placeholder="999-99-99"
                        onChange={handleNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.contactsForm__input} 
                    />
                </label>
                <button type="submit" className={css.contactsAdd__btn}>
                    Add contact
                    {isLoading && <MoonLoader size={8} />}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;