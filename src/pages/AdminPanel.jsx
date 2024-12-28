import React from 'react';
import Sidebar from '../components/Sidebar';  // Import Sidebar
import Header from '../components/Header';    // Import Header
import AdminBookForm from '../components/AdminBookForm';
import AdminBookTable from '../components/AdminBookTable';

const AdminPanel = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Admin Panel Content */}
        <div className="p-4">
          <h1 className="text-2xl mb-4">Admin Panel</h1>
          
          {/* Admin Book Form to Add or Edit Books */}
          <AdminBookForm />
          
          {/* Admin Book Table to Manage Books */}
          <AdminBookTable />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
