import React from "react";
import { useAuth } from "../utils/auth"; 

function Profile() {
  // Mock user data (to put the  real API or state data in production)
  const user = {
    name: "bookstore",
    email: "bookstore@example.com",
    phone: "+123 456 7890",
    address: "123 Main St, Springfield",
    billing: {
      cardType: "Visa",
      cardNumber: "**** **** **** 1234",
      expiry: "12/2026",
    },
    orders: [
      { id: "ORD123", date: "2024-12-01", status: "Delivered", amount: "$200" },
      { id: "ORD124", date: "2024-11-15", status: "Shipped", amount: "$120" },
      { id: "ORD125", date: "2024-11-01", status: "Processing", amount: "$80" },
    ],
  };

  const { logout } = useAuth(); // Use logout from auth hook

  return (
    <div className="container mx-auto mt-10 p-4">
      {/* Profile Header */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
          <p className="mt-2 text-gray-600">Manage your account and settings here.</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Personal Information Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Information
        </button>
      </div>

      {/* Billing Information Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Billing Information</h2>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Card Type:</strong> {user.billing.cardType}
          </p>
          <p>
            <strong>Card Number:</strong> {user.billing.cardNumber}
          </p>
          <p>
            <strong>Expiry Date:</strong> {user.billing.expiry}
          </p>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Update Billing Info
        </button>
      </div>

      {/* Order History Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Order History</h2>
        {user.orders.length > 0 ? (
          <table className="min-w-full bg-white mt-4 shadow-md rounded">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.date}</td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4 text-gray-600">You have no orders yet.</p>
        )}
      </div>

      {/* Saved Addresses Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Saved Addresses</h2>
        <p className="mt-4">{user.address}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Manage Addresses
        </button>
      </div>

      {/* Account Settings Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Account Settings</h2>
        <p className="mt-4 text-gray-600">Update your password and account preferences.</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Change Password
        </button>
      </div>
    </div>
  );
}

export default Profile;
