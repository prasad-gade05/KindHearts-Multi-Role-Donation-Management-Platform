import React, { useState } from 'react';
import { 
  RefreshCw, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  PauseCircle,
  Edit,
  Trash2,
  Plus,
  CreditCard,
  ChevronDown
} from 'lucide-react';

const RecurringDonations = () => {
  const [showNewDonation, setShowNewDonation] = useState(false);

  // Sample data
  const recurringStats = {
    activeSubscriptions: '3',
    monthlyImpact: '₹2,450',
    totalRecurring: '₹29,400',
    nextDebit: 'June 1, 2025'
  };

  const recurringDonations = [
    {
      id: 1,
      institute: "Children's Hospital",
      amount: '₹1,000',
      frequency: 'Monthly',
      startDate: 'Jan 15, 2025',
      nextDate: 'June 1, 2025',
      status: 'active',
      impact: 'Supports medical care for 2 children monthly'
    },
    {
      id: 2,
      institute: 'Education Trust',
      amount: '₹750',
      frequency: 'Monthly',
      startDate: 'Feb 1, 2025',
      nextDate: 'June 1, 2025',
      status: 'active',
      impact: 'Contributes to 1 student scholarship'
    },
    {
      id: 3,
      institute: 'Food Bank',
      amount: '₹700',
      frequency: 'Monthly',
      startDate: 'Mar 10, 2025',
      nextDate: 'June 1, 2025',
      status: 'paused',
      impact: 'Provides meals for 10 families'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Subscriptions</p>
              <h3 className="text-2xl font-bold mt-1">{recurringStats.activeSubscriptions}</h3>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <RefreshCw size={24} className="text-rose-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Impact</p>
              <h3 className="text-2xl font-bold mt-1">{recurringStats.monthlyImpact}</h3>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Calendar size={24} className="text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Yearly Projection</p>
              <h3 className="text-2xl font-bold mt-1">{recurringStats.totalRecurring}</h3>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <CheckCircle2 size={24} className="text-emerald-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Next Debit Date</p>
              <h3 className="text-2xl font-bold mt-1">{recurringStats.nextDebit}</h3>
            </div>
            <div className="p-3 rounded-lg bg-purple-50">
              <AlertCircle size={24} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Your Recurring Donations</h2>
        <button
          onClick={() => setShowNewDonation(true)}
          className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
        >
          <Plus size={20} className="mr-2" />
          New Recurring Donation
        </button>
      </div>

      {/* Recurring Donations List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institute
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount & Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recurringDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{donation.institute}</div>
                    <div className="text-sm text-gray-500">Since {donation.startDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{donation.amount}</div>
                    <div className="text-sm text-gray-500">{donation.frequency}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      donation.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {donation.status === 'active' ? 'Active' : 'Paused'}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">Next: {donation.nextDate}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{donation.impact}</div>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Edit size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      {donation.status === 'active' ? <PauseCircle size={16} /> : <RefreshCw size={16} />}
                    </button>
                    <button className="text-gray-400 hover:text-rose-500">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Donation Modal */}
      {showNewDonation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Set Up Recurring Donation</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Institute</label>
                <div className="relative">
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500">
                    <option>Children's Hospital</option>
                    <option>Education Trust</option>
                    <option>Food Bank</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                <div className="relative">
                  <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewDonation(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
                >
                  Set Up Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurringDonations; 