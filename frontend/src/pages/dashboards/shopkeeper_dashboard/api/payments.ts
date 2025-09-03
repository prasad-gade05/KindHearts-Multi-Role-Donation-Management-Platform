import { Payment } from '../types';

// Mock data for payments
const mockPayments: Payment[] = [
  {
    id: '1',
    orderId: '2',
    amount: 600,
    status: 'completed',
    transactionId: 'txn-12345',
    createdAt: new Date(Date.now() - 43200000).toISOString() // 12 hours ago
  },
  {
    id: '2',
    orderId: '3',
    amount: 4000,
    status: 'completed',
    transactionId: 'txn-23456',
    createdAt: new Date(Date.now() - 86400000).toISOString() // 1 day ago
  },
  {
    id: '3',
    orderId: '4',
    amount: 900,
    status: 'completed',
    transactionId: 'txn-34567',
    createdAt: new Date(Date.now() - 172800000).toISOString() // 2 days ago
  },
  {
    id: '4',
    orderId: '5',
    amount: 660,
    status: 'completed',
    transactionId: 'txn-45678',
    createdAt: new Date(Date.now() - 259200000).toISOString() // 3 days ago
  },
  {
    id: '5',
    orderId: '6',
    amount: 1500,
    status: 'completed',
    transactionId: 'txn-56789',
    createdAt: new Date(Date.now() - 345600000).toISOString() // 4 days ago
  },
  {
    id: '6',
    orderId: '1',
    amount: 300,
    status: 'pending',
    transactionId: 'txn-67890',
    createdAt: new Date(Date.now() - 21600000).toISOString() // 6 hours ago
  }
];

// Simulate API call to fetch payments
export const fetchPayments = async (): Promise<Payment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPayments);
    }, 500);
  });
};