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
        <div className="col-span-2 flex flex-col items-center md:bg-gray-200 bg-white p-4">
          <Sidebar />
        </div>
        <div className="col-span-10 p-4">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/contact/:id/edit" element={<EditContact />} /> 
            <Route path="/chart" element={<Chart />} /> 
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
