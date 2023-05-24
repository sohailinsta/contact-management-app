import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateContact } from '../redux/contactSlice';
import { RootState } from '../redux/store';

export const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    // Retrieve the contacts from the Redux store
    const contacts = useSelector((state: RootState) => state.contacts);
    // Find the contact with the matching id
    const contact = contacts.find((contact) => contact.id === id);
  
    // Set up state for form inputs
    const [fname, setFname] = useState(contact ? contact.fname : '');
    const [lname, setLname] = useState(contact ? contact.lname : '');
    const [status, setStatus] = useState(contact ? contact.status : '');
  
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
       if (id) {
    const updatedContact = {
      id: id,
      fname: fname,
      lname: lname,
      status: status,
    };

    dispatch(updateContact(updatedContact));
    navigate(`/contact/${id}`); // Redirect to contact details after update
  }
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Edit Contact</h1>
        {contact ? (
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="fname" className="text-lg font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lname" className="text-lg font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="status" className="text-lg font-semibold">
                Status:
              </label>
              <div className="mt-1 flex flex-col ml-8">
                <label htmlFor="active" className="mr-4">
                  <input
                    type="radio"
                    id="active"
                    value="active"
                    checked={status === 'active'}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mr-1"
                  />
                  Active
                </label>
                <label htmlFor="inactive">
                  <input
                    type="radio"
                    id="inactive"
                    value="inactive"
                    checked={status === 'inactive'}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mr-1"
                  />
                  Inactive
                </label>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Update Contact
              </button>
              <button
                type="button"
                onClick={() => navigate(`/contact/${id}`)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p className="text-red-500">Contact not found.</p>
        )}
      </div>
    );
  };