import { createContext, useContext } from 'react';

export type TabContextType = {
  selectedTab: string | null;
  selectTab: (tab: string) => void;
  tabsPrefix: string;
};

export const TabContext = createContext<TabContextType>({
  tabsPrefix: '',
  selectedTab: null,
  selectTab: (tab: string) => {
    throw new Error('[selectTab] must be used within TabContextProvider');
  },
});

export const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTab must be used within a TabContextProvider');
  }

  return context;
};
