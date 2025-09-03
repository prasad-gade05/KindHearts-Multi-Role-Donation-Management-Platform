// Constants for storage keys
const STORAGE_KEYS = {
  USER_ROLE: 'user_role',
  USER_ID: 'user_id',
  USER_EMAIL: 'user_email',
  EMAIL_ROLE_MAP: 'email_role_map'
} as const;

interface UserData {
  userId: string;
  role: string;
  email: string;
}

export const storage = {
  // Save user data including role mapping
  saveUserData: (userId: string, role: string, email: string) => {
    // Store user specific data
    localStorage.setItem(`user_${userId}`, JSON.stringify({ userId, role, email }));
    
    // Update email-role map
    const emailRoleMap = JSON.parse(localStorage.getItem('email_role_map') || '{}');
    emailRoleMap[email] = role;
    localStorage.setItem('email_role_map', JSON.stringify(emailRoleMap));
  },

  // Get role by email (used during login)
  getRoleByEmail: (email: string): string | null => {
    const emailRoleMap = JSON.parse(localStorage.getItem('email_role_map') || '{}');
    return emailRoleMap[email] || null;
  },

  // Get all email-role mappings
  getEmailRoleMap: () => {
    return JSON.parse(localStorage.getItem('email_role_map') || '{}');
  },

  // Get user data by ID
  getUserData: (userId: string): UserData | null => {
    const data = localStorage.getItem(`user_${userId}`);
    return data ? JSON.parse(data) : null;
  },

  // Clear user data on logout
  clearUserData: (userId: string, email: string) => {
    localStorage.removeItem(`user_${userId}`);
    // Note: We don't remove from email_role_map to preserve role history
  },

  // Get user role
  getUserRole: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.USER_ROLE);
  },

  // Get user ID
  getUserId: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.USER_ID);
  },

  // Add this function to the storage object
  hasExistingRole: (email: string): boolean => {
    const emailRoleMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.EMAIL_ROLE_MAP) || '{}');
    return !!emailRoleMap[email];
  }
}; 