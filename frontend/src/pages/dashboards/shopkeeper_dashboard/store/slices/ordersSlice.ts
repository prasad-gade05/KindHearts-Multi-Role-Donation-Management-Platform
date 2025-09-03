import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderStatus } from '../../types';

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

// Sample initial data
const sampleOrders: Order[] = [
  // Pending Orders
  {
    id: '1',
    instituteId: 'inst1',
    instituteName: 'St. Mary School',
    items: [
      { name: 'Mathematics Textbooks', quantity: 50, price: 25 },
      { name: 'Science Lab Manuals', quantity: 50, price: 15 },
      { name: 'School Stationery Kit', quantity: 100, price: 10 }
    ],
    totalAmount: 3750,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '123 School St, Education District',
    contactPerson: 'John Doe',
    contactNumber: '555-0123',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - New semester starting'
  },
  {
    id: '2',
    instituteId: 'inst2',
    instituteName: 'City Public School',
    items: [
      { name: 'Sports Equipment Set', quantity: 5, price: 500 },
      { name: 'Art Supplies Bundle', quantity: 50, price: 30 },
      { name: 'Musical Instruments', quantity: 10, price: 200 }
    ],
    totalAmount: 5500,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '456 Public Ave, Downtown',
    contactPerson: 'Jane Smith',
    contactNumber: '555-0456',
    paymentStatus: 'pending'
  },
  {
    id: '7',
    instituteId: 'inst7',
    instituteName: 'Arts College',
    items: [
      { name: 'Professional Canvas Sets', quantity: 30, price: 45 },
      { name: 'Oil Paint Collection', quantity: 50, price: 35 },
      { name: 'Artist Brushes Set', quantity: 50, price: 25 },
      { name: 'Sculpture Tools Kit', quantity: 20, price: 75 }
    ],
    totalAmount: 5750,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '404 Arts Avenue, Creative District',
    contactPerson: 'David Lee',
    contactNumber: '555-4444',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - Exhibition preparation'
  },
  {
    id: '8',
    instituteId: 'inst8',
    instituteName: 'Medical University',
    items: [
      { name: 'Lab Coats (Premium)', quantity: 50, price: 45 },
      { name: 'Medical Reference Books', quantity: 75, price: 120 },
      { name: 'Advanced First Aid Kits', quantity: 20, price: 85 },
      { name: 'Medical Equipment Set', quantity: 10, price: 500 }
    ],
    totalAmount: 14750,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '505 Medical Center Dr, Healthcare Zone',
    contactPerson: 'Emma White',
    contactNumber: '555-5555',
    paymentStatus: 'pending'
  },
  {
    id: '9',
    instituteId: 'inst9',
    instituteName: 'Engineering Institute',
    items: [
      { name: 'Engineering Drawing Sets', quantity: 100, price: 40 },
      { name: 'Technical Calculators', quantity: 50, price: 75 },
      { name: 'Workshop Safety Equipment', quantity: 40, price: 65 },
      { name: 'Electronics Lab Kit', quantity: 25, price: 200 }
    ],
    totalAmount: 12450,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '606 Tech Park, Innovation Hub',
    contactPerson: 'Robert Chen',
    contactNumber: '555-6666',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - Lab setup required'
  },
  {
    id: '10',
    instituteId: 'inst10',
    instituteName: 'Sports Academy',
    items: [
      { name: 'Professional Soccer Balls', quantity: 30, price: 50 },
      { name: 'Training Equipment Set', quantity: 10, price: 300 },
      { name: 'Sports Uniforms', quantity: 100, price: 35 },
      { name: 'Fitness Monitoring Devices', quantity: 20, price: 150 }
    ],
    totalAmount: 9500,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '707 Sports Complex, Athletics District',
    contactPerson: 'Michael Jordan',
    contactNumber: '555-7777',
    paymentStatus: 'pending'
  },
  // Orders in Kanban (Already Accepted)
  {
    id: '4',
    instituteId: 'inst4',
    instituteName: 'Global Academy',
    items: [
      { name: 'Science Lab Equipment', quantity: 5, price: 500 },
      { name: 'Safety Gear', quantity: 30, price: 25 }
    ],
    totalAmount: 3250,
    status: 'accepted',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date().toISOString(),
    deliveryAddress: '101 Academy Road',
    contactPerson: 'Sarah Wilson',
    contactNumber: '555-1111',
    paymentStatus: 'pending',
    notes: 'Handle with care'
  },
  {
    id: '5',
    instituteId: 'inst5',
    instituteName: 'Sunshine Elementary',
    items: [
      { name: 'Children\'s Books', quantity: 200, price: 8 },
      { name: 'Educational Toys', quantity: 30, price: 20 }
    ],
    totalAmount: 2200,
    status: 'packaging',
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
    updatedAt: new Date().toISOString(),
    deliveryAddress: '202 Sunshine Blvd',
    contactPerson: 'Mark Brown',
    contactNumber: '555-2222',
    paymentStatus: 'pending'
  },
  {
    id: '6',
    instituteId: 'inst6',
    instituteName: 'Tech High School',
    items: [
      { name: 'Computer Parts', quantity: 15, price: 300 },
      { name: 'Programming Books', quantity: 40, price: 45 }
    ],
    totalAmount: 6300,
    status: 'ready',
    createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), // 3 days ago
    updatedAt: new Date().toISOString(),
    deliveryAddress: '303 Tech Park',
    contactPerson: 'Lisa Chen',
    contactNumber: '555-3333',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed'
  },
  // More Pending Orders
  {
    id: '3',
    instituteId: 'inst3',
    instituteName: 'St. Mary School',
    items: [
      { name: 'Canvas Sets', quantity: 30, price: 25 },
      { name: 'Paint Supplies', quantity: 100, price: 15 },
      { name: 'Brushes', quantity: 50, price: 10 }
    ],
    totalAmount: 2750,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '404 Arts Avenue',
    contactPerson: 'David Lee',
    contactNumber: '555-4444',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed'
  },
  {
    id: '4',
    instituteId: 'inst4',
    instituteName: 'Medical University',
    items: [
      { name: 'Lab Coats', quantity: 50, price: 35 },
      { name: 'Medical Books', quantity: 75, price: 80 },
      { name: 'First Aid Kits', quantity: 20, price: 45 }
    ],
    totalAmount: 8150,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '505 Medical Center Dr',
    contactPerson: 'Emma White',
    contactNumber: '555-5555',
    paymentStatus: 'pending'
  }
];

// Add this test data to your ordersSlice.ts
const testPendingOrders: Order[] = [
  {
    id: 'PO-001',
    instituteId: 'INST001',
    instituteName: 'City High School',
    items: [
      { name: 'School Textbooks Set', quantity: 100, price: 45 },
      { name: 'Student Notebooks Pack', quantity: 200, price: 8 },
      { name: 'Science Lab Equipment', quantity: 10, price: 250 }
    ],
    totalAmount: 7100,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '123 Education Street, School District',
    contactPerson: 'Principal Johnson',
    contactNumber: '555-0101',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - New semester starting'
  },
  {
    id: 'PO-002',
    instituteId: 'INST002',
    instituteName: 'Medical Training Institute',
    items: [
      { name: 'Medical Training Mannequins', quantity: 5, price: 1200 },
      { name: 'First Aid Kits', quantity: 50, price: 75 },
      { name: 'Medical Reference Books', quantity: 30, price: 120 }
    ],
    totalAmount: 10350,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '456 Healthcare Avenue, Medical Campus',
    contactPerson: 'Dr. Sarah Smith',
    contactNumber: '555-0202',
    paymentStatus: 'pending'
  },
  {
    id: 'PO-003',
    instituteId: 'INST003',
    instituteName: 'Sports Academy',
    items: [
      { name: 'Professional Soccer Balls', quantity: 20, price: 50 },
      { name: 'Training Equipment Set', quantity: 5, price: 800 },
      { name: 'Sports Uniforms', quantity: 50, price: 45 }
    ],
    totalAmount: 6250,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '789 Sports Complex, Athletic Zone',
    contactPerson: 'Coach Williams',
    contactNumber: '555-0303',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - Tournament next week'
  },
  {
    id: 'PO-004',
    instituteId: 'INST004',
    instituteName: 'Art & Design College',
    items: [
      { name: 'Professional Art Supplies Kit', quantity: 30, price: 150 },
      { name: 'Digital Drawing Tablets', quantity: 15, price: 300 },
      { name: 'Canvas Bulk Pack', quantity: 100, price: 20 }
    ],
    totalAmount: 8500,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '321 Creative Avenue, Arts District',
    contactPerson: 'Prof. Lisa Chen',
    contactNumber: '555-0404',
    paymentStatus: 'pending'
  },
  {
    id: 'PO-005',
    instituteId: 'INST005',
    instituteName: 'Engineering University',
    items: [
      { name: 'Electronics Lab Kit', quantity: 20, price: 500 },
      { name: 'Programming Hardware Set', quantity: 15, price: 800 },
      { name: 'Technical Drawing Tools', quantity: 50, price: 75 }
    ],
    totalAmount: 15750,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deliveryAddress: '567 Tech Park, Innovation Hub',
    contactPerson: 'Dr. Robert Lee',
    contactNumber: '555-0505',
    paymentStatus: 'pending',
    notes: 'urgent delivery needed - Lab setup required'
  }
];

// Update the getInitialOrders function
const getInitialOrders = (): Order[] => {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    try {
      return JSON.parse(storedOrders);
    } catch (error) {
      console.error('Failed to parse orders from localStorage', error);
    }
  }
  // If no stored orders or parsing fails, use test data
  localStorage.setItem('orders', JSON.stringify(testPendingOrders));
  return testPendingOrders;
};

const initialState: OrdersState = {
  orders: getInitialOrders(),
  loading: false,
  error: null
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      localStorage.setItem('orders', JSON.stringify(action.payload));
    },
    updateOrder: (state, action: PayloadAction<{ orderId: string; status: OrderStatus }>) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
        order.updatedAt = new Date().toISOString();
        localStorage.setItem('orders', JSON.stringify(state.orders));
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setOrders, updateOrder, setLoading, setError } = ordersSlice.actions;

// Async thunk for fetching orders
export const fetchOrders = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const orders = getInitialOrders();
    dispatch(setOrders(orders));
  } catch (error) {
    dispatch(setError('Failed to fetch orders'));
  } finally {
    dispatch(setLoading(false));
  }
};

// Async thunk for updating order status
export const updateOrderStatus = ({ orderId, status }: { orderId: string; status: OrderStatus }) => 
  async (dispatch: any) => {
    try {
      dispatch(updateOrder({ orderId, status }));
      return true;
    } catch (error) {
      dispatch(setError('Failed to update order status'));
      return false;
    }
  };

export default ordersSlice.reducer;