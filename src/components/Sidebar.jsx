import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>

      <ul className="space-y-4 p-4">
        <li>
          <Link to="/admin" className="text-lg hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-books" className="text-lg hover:text-gray-300">
            Manage Books
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="text-lg hover:text-gray-300">
            Orders
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="text-lg hover:text-gray-300">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
