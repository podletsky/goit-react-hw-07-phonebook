import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContacts } from '../../redux/operation/operation';
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
  console.log(contacts);
  console.log(filter);
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

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
