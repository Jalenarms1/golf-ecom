'use client'

import { createContext, useState, useContext } from 'react';

// Create the context
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = (setTo) => {
    setSidebarOpen(setTo ?? !sidebarOpen)
  }

  return (
    <SidebarContext.Provider value={{ toggleSidebar, sidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Create a custom hook to use the SidebarContext
export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
