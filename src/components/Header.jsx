import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
