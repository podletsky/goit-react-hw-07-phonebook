import React from 'react';
import styles from '../contactList/ContactList.module.css';
import { selestFilter } from 'redux/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contactsSlice/conactsSlice';

const Filter = () => {
  const filter = useSelector(selestFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search Contacts"
    />
  );
};

export default Filter;
