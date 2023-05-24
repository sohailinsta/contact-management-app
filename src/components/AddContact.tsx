import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const AddContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [status,setStatus] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = {
      id,
      fname,
      lname,
      status,
    };

    // Perform the necessary logic to add the new contact
    dispatch(addContact(newContact));

    // Reset form fields
    setId('');
    setFname('');
    setLname('');
    setStatus('');

    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add Contact</h1>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
          <label htmlFor="id" className="text-lg font-semibold">
            ID
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
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
            type="lname"
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
        checked={status === "active"}
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
        checked={status === "inactive"}
        onChange={(e) => setStatus(e.target.value)}
        className="mr-1"
      />
      Inactive
    </label>
  </div>
</div>
<div className="flex justify-between items-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Contact
        </button>

        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go Back
        </Link>
      </div>
      </form>
    </div>
  );
};
