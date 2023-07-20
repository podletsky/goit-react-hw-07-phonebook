import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  // addContact,
  deleteContact,
} from '../../redux/contactsSlice/conactsSlice';
import {
  selestFilter,
  selestSelectors,
  selestLoading,
} from '../../redux/selectors/selectors';
// import styles from '../contactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selestSelectors);
  const filter = useSelector(selestFilter);
  const isLoading = useSelector(selestLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  // const handleAddContact = async () => {
  //   const newContactData = {};
  //   try {
  //     await dispatch(addContact(newContactData));
  //   } catch (error) {}
  // };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
