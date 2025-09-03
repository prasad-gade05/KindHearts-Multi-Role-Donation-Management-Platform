import React, { useState } from 'react';
import { 
  Calendar, 
  Download, 
  Filter, 
  Search, 
  ChevronDown, 
  TrendingUp,
  Package,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle
} from 'lucide-react';

const MyDonations = () => {
  const [timeFilter, setTimeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample data
  const donationStats = {
    totalAmount: '₹3,450',
    totalItems: '45',
    avgDonation: '₹115',
    completedRate: '92%'
  };

  const donations = [
    {
      id: 1,
      type: 'monetary',
      amount: '₹150',
      institute: "Children's Hospital",
      cause: 'Medical Supplies',
      date: 'May 15, 2025',
      status: 'delivered',
      impact: '12 children received medical care',
      taxReceipt: true
    },
    {
      id: 2,
      type: 'item',
      amount: '₹75',
      institute: 'Food Bank',
      cause: 'Canned Goods',
      date: 'May 10, 2025',
      status: 'in_transit',
      impact: 'Will help feed 25 families',
      taxReceipt: true
    },
    {
      id: 3,
      type: 'monetary',
      amount: '₹200',
      institute: 'Education Trust',
      cause: 'Scholarship Fund',
      date: 'May 8, 2025',
      status: 'processing',
      impact: 'Supporting 2 student scholarships',
      taxReceipt: true
    },
    {
      id: 4,
      type: 'item',
      amount: '₹120',
      institute: 'Animal Shelter',
      cause: 'Pet Supplies',
      date: 'May 5, 2025',
      status: 'delivered',
      impact: 'Helped care for 8 rescued animals',
      taxReceipt: false
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle2 size={16} className="text-green-500" />;
      case 'in_transit':
        return <Truck size={16} className="text-blue-500" />;
      case 'processing':
        return <Clock size={16} className="text-amber-500" />;
      default:
        return <AlertCircle size={16} className="text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in_transit':
        return 'In Transit';
      case 'processing':
        return 'Processing';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Donations</p>
              <h3 className="text-2xl font-bold mt-1">{donationStats.totalAmount}</h3>
            </div>
            <div className="p-3 rounded-lg bg-rose-50">
              <TrendingUp size={24} className="text-rose-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Items Donated</p>
              <h3 className="text-2xl font-bold mt-1">{donationStats.totalItems}</h3>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Package size={24} className="text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Donation</p>
              <h3 className="text-2xl font-bold mt-1">{donationStats.avgDonation}</h3>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50">
              <Calendar size={24} className="text-emerald-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Completion Rate</p>
              <h3 className="text-2xl font-bold mt-1">{donationStats.completedRate}</h3>
            </div>
            <div className="p-3 rounded-lg bg-purple-50">
              <CheckCircle2 size={24} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search donations..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-rose-500 focus:border-rose-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="all">All Time</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="all">All Status</option>
                <option value="delivered">Delivered</option>
                <option value="in_transit">In Transit</option>
                <option value="processing">Processing</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Donations List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donation Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institute & Cause
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
              {donations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                        {donation.type === 'monetary' ? (
                          <Calendar size={20} className="text-gray-600" />
                        ) : (
                          <Package size={20} className="text-gray-600" />
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{donation.amount}</div>
                        <div className="text-sm text-gray-500">{donation.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{donation.institute}</div>
                    <div className="text-sm text-gray-500">{donation.cause}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {getStatusIcon(donation.status)}
                      <span className="ml-2 text-sm text-gray-900">{getStatusText(donation.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{donation.impact}</div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    {donation.taxReceipt && (
                      <button className="text-rose-600 hover:text-rose-800 flex items-center justify-end space-x-1">
                        <Download size={16} />
                        <span>Receipt</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDonations; 