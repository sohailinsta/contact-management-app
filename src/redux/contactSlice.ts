import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Contact {
  id: string;
  fname: string;
  lname: string;
  status: string;
  // other contact properties...
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, fname, lname, status } = action.payload;
      const contact = state.find((contact) => contact.id === id);
      if (contact) {
        contact.fname = fname;
        contact.lname = lname;
        contact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const contactId = action.payload;
      return state.filter((contact) => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;

export const selectContacts = (state: RootState) => state.contacts;
