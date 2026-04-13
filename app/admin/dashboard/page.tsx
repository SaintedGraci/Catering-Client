'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const recentOrders = [
    { id: 1, customer: 'John Smith', event: 'Corporate Event', date: '2024-04-20', status: 'Pending' },
    { id: 2, customer: 'Sarah Johnson', event: 'Wedding', date: '2024-04-25', status: 'Confirmed' },
    { id: 3, customer: 'Mike Brown', event: 'Birthday Party', date: '2024-04-18', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Catering Admin</h1>
          <div className="flex gap-4 items-center">
            <span className="text-gray-300">Admin User</span>
            <Link href="/" className="text-amber-400 hover:text-amber-300 transition">
              View Site
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">Total Orders</p>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">Pending</p>
            <p className="text-3xl font-bold text-amber-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">This Month</p>
            <p className="text-3xl font-bold text-green-600">$45,200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm mb-1">Customers</p>
            <p className="text-3xl font-bold text-gray-900">156</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-amber-600 text-amber-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'orders'
                    ? 'border-b-2 border-amber-600 text-amber-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className={`px-6 py-3 font-medium ${
                  activeTab === 'menu'
                    ? 'border-b-2 border-amber-600 text-amber-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Menu
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Customer</th>
                        <th className="text-left py-3 px-4">Event Type</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{order.customer}</td>
                          <td className="py-3 px-4">{order.event}</td>
                          <td className="py-3 px-4">{order.date}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${
                                order.status === 'Completed'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'Confirmed'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">All Orders</h2>
                <p className="text-gray-600">Order management coming soon...</p>
              </div>
            )}

            {activeTab === 'menu' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Menu Management</h2>
                <p className="text-gray-600">Menu editor coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
