import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactBook from './ContactBook/ContactBook';
import Filter from './Filter/Filter';
import Form from './Form/Form';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return (
      value || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = items => {
    console.log('addContact');

    if (isDublicate(items)) {
      return alert(
        `${items.name}: ${items.number} contact already in your list`
      );
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        ...items,
      };
      return [...prevContacts, newContact];
    });
  };

  const removeContact = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item =>
        item.name.toLocaleLowerCase() === name.toLocaleLowerCase() &&
        item.number === number
    );
    return Boolean(result);
  };

  const getFilteredContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) || number.includes(filter);
      return result;
    });
    return filteredContacts;
  };

  const filteredContasts = getFilteredContact();

  return (
    <>
      <h2>Phonebook</h2>
      <Form onSubmit={addContact} />
      <Filter onChange={handleFilter} />

      <h2>Contacts</h2>

      <ContactBook contacts={filteredContasts} removeContact={removeContact} />
    </>
  );
};

export default App;
