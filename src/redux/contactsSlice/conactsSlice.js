import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    error: null,
    items: [],
    isLoading: false,
    filter: '',
  },
  reducers: {
    fetchContacts(state) {
      state.isLoading = true;
    },
    addContact(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { fetchContacts, addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
