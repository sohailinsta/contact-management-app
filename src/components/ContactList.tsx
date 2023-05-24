import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Contact {
  id: number;
  fname: string;
  lname: string;
  status: string;
}

interface RootState {
  contacts: Contact[];
  // ... other state properties
}

export const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  console.log(contacts); // Check the contact details in the browser console

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact List</h1>

      {contacts.length === 0 ? (
        <h2 className="text-xl font-semibold mb-4">No contacts added</h2>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="text-center">
                <td className="border px-4 py-2">{contact.id}</td>
                <td className="border px-4 py-2">{contact.fname}</td>
                <td className="border px-4 py-2">{contact.lname}</td>
                <td className="border px-4 py-2">{contact.status}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/contact/${contact.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

<Link
  to="/add"
  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
>
  Add Contact
</Link>

    </div>
  );
};
