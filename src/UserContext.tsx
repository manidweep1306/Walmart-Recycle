import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  totalImpact: number;
  itemsRecycled: number;
  credits: number;
  tier: string;
  co2Saved: number;
  wasteRecycled: number;
}

interface UserContextType {
  user: User;
  updateUser: (newUser: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: 'Alex Johnson',
    totalImpact: 847,
    itemsRecycled: 23,
    credits: 234,
    tier: 'Green Champion',
    co2Saved: 45.2,
    wasteRecycled: 12.8
  });

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};