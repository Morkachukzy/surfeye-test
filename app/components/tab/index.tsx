'use client';

import {
  type AriaAttributes,
  type KeyboardEventHandler,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  useCallback,
} from 'react';

import { generateRandomId } from '@/app/_utils/generate-random-id';
import { cn } from '@/app/_theme/utils';

import { GenericButton } from '../button';
import { TabContext, useTab } from './use-tab';
import { handleTabNavigation } from './utils';

type TabsProps = {
  children?: ReactNode;
  defaultSelectedTab: string;
};

export const Tabs = ({ children, defaultSelectedTab }: TabsProps) => {
  const tabsPrefix = useMemo(() => generateRandomId(4), []);

  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

  const selectTab = useCallback((tab: string) => setSelectedTab(tab), []);

  const contextValue = useMemo(
    () => ({
      selectedTab,
      selectTab,
      tabsPrefix,
    }),
    [selectTab, selectedTab, tabsPrefix]
  );

  return (
    <TabContext.Provider value={contextValue}>
      <div className="">{children}</div>
    </TabContext.Provider>
  );
};

type TabTriggersProps = {
  children: ReactNode;
  'aria-label': AriaAttributes['aria-label'];
  className?: string;
};

export const TabTriggers = ({
  children,
  'aria-label': ariaLabel,
  className,
}: TabTriggersProps) => {
  const tabTriggerRef = useRef<HTMLDivElement | null>(null);

  const tabSelector = useRef('[role="tab"]:not([disabled])');

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const triggerList = tabTriggerRef.current;

      if (!triggerList) return;

      const tabs = Array.from<HTMLElement>(
        document.querySelectorAll(tabSelector.current)
      );

      handleTabNavigation(event.key, tabs);
    },
    []
  );

  return (
    <div
      ref={tabTriggerRef}
      role="tab-triggers"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={cn(className)}
    >
      {children}
    </div>
  );
};

type TabProps = {
  children: ReactNode;
  tab: string;
  className?: string;
};

export const Tab = ({ children, tab, className }: TabProps) => {
  const { selectedTab, selectTab, tabsPrefix } = useTab();

  const isSelectedTab = useMemo(() => selectedTab === tab, [selectedTab, tab]);

  const tabIndex = useMemo(() => {
    return isSelectedTab ? 0 : -1;
  }, [isSelectedTab]);
  return (
    <GenericButton
      role="tab"
      aria-selected={isSelectedTab}
      aria-controls={`tab-${tabsPrefix}-tabpanel-${tab}`}
      onClick={() => selectTab(tab)}
      tabIndex={tabIndex}
      className={cn({"active-tab": isSelectedTab}, className)}
      small
    >
      {children}
    </GenericButton>
  );
};

type TabPanelProps = {
  children: ReactNode;
  tab: string;
  className?: string;
};

export const TabPanel = ({ children, tab, className }: TabPanelProps) => {
  const { selectedTab, tabsPrefix } = useTab();

  if (selectedTab !== tab) return null;
  return (
    <div
      role="tab-panel"
      tabIndex={0}
      id={`tab-${tabsPrefix}-tabpanel-${tab}`}
      className={cn(className)}
    >
      {children}
    </div>
  );
};

// Tabs.Triggers = TabTriggers;
// Tabs.Tab = Tab;
// Tabs.Panel = TabPanel;

// export default Tabs;
