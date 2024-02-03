'use client';

import { createContext, useContext, useState } from 'react';

export type TabType = {
  id: number;
  label: string | JSX.Element | React.ReactNode;
  view: JSX.Element | React.ReactNode;
};
type TabContextType = {
  tabs: TabType[];
  activeTab: TabType;
  setTab: (tab: TabType) => void;
};

const TabContext = createContext<TabContextType | null>(null);

type TabProviderProps = {
  children: React.ReactNode;
  tabs: TabType[];
};
export const TabProvider = ({ children, tabs }: TabProviderProps) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);

  const setTab = (tab: TabType) => setActiveTab(tab);
  return (
    <TabContext.Provider value={{ tabs, activeTab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTab must be used within a TabContextProvider');
  }

  return context;
};
