import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContactList } from './components/ContactList';
import { ContactDetails } from './components/ContactDetails';
import { AddContact } from './components/AddContact';
import { EditContact } from './components/EditContact';
import { Sidebar } from './components/Sidebar';
import { Chart } from './components/Chart';
import { Map } from './components/Map';

function App() {
  return (
    <Router>
      <div className="grid grid-cols-12 min-h-screen">
        {/* Sidebar */}
        <div className="col-span-2 flex flex-col items-center md:bg-gray-200 bg-white p-4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-10 p-4">
          <Routes>
            {/* Contact List */}
            <Route path="/" element={<ContactList />} />

            {/* Add Contact */}
            <Route path="/add" element={<AddContact />} />

            {/* Contact Details */}
            <Route path="/contact/:id" element={<ContactDetails />} />

            {/* Edit Contact */}
            <Route path="/contact/:id/edit" element={<EditContact />} />

            {/* Chart */}
            <Route path="/chart" element={<Chart />} />

            {/* Map */}
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
