import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteContact } from "../redux/contactSlice";
import { RootState } from "../redux/store";

export const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve the contacts from the Redux store
  const contacts = useSelector((state: RootState) => state.contacts);

  // Find the contact with the matching id
  const contact = contacts.find((contact) => contact.id === id);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    if (id) {
      // Dispatch the deleteContact action to remove the contact from Redux store
      dispatch(deleteContact(id));
    }
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Details</h1>
      {contact ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <div className="flex items-center mb-4">
            <div className="ml-4">
              <h2 className="text-sm md:text-2xl font-semibold mb-2">
                First Name: {contact.fname}
              </h2>
              <p className="text-gray-600 mb-2">Last Name: {contact.lname}</p>
              <p className="text-gray-600 mb-2">Status: {contact.status}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center items-center">
            <div className="sm:mb-0 mb-4">
              <button>
              <Link
                to={`/contact/${id}/edit`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded"
              >
                Edit Contact
              </Link>
              </button>
            </div>
            <div className="sm:mb-0 mb-2">
            <button>
            <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded"
        >
          Go Back
        </Link>
        </button>
        </div>
            <div className="sm:mt-0 mt-1">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 md:py-2 md:px-4 rounded"
              >
                Delete Contact
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Contact not found.</p>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto relative z-10">
            <h2 className="text-2xl font-semibold mb-4">
              Are you sure you want to delete this contact?
            </h2>
            <div className="flex justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
