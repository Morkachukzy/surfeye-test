'use client';

import { cn } from '@/app/_theme/utils';
import { GenericButton } from '../button';
import { TabProvider, TabType, useTab } from './use-tab';

type TabProps = {
  children: React.ReactNode;
  tabs: TabType[];
};

export const Tab = ({ tabs, children }: TabProps) => {
  return <TabProvider tabs={tabs}>{children}</TabProvider>;
};

type TabControlsProps = {
  className?: string;
};

const tabStyles = {
  normal:
    'bg-transparent text-brand-primary text-opacity-50 py-0 px-[18px] md:px-[18px] rounded-none  [&:not(&:first-child)]:border-l border-brand-primary  peer-[]/active:border-r-0',
  active:
    'bg-brand-primary text-brand-light text-opacity-100 shadow-brand-100 py-3 px-[18px] md:px-[18px] peer/active rounded-3xl',
} as const;
export const TabControls = ({ className }: TabControlsProps) => {
  const { tabs, activeTab, setTab } = useTab();

  const handleSelectTab = (tab: TabType) => {
    setTab(tab);
  };

  const isActive = (id: number) => {
    return activeTab.id === id;
  };
  return (
    <div
      className={cn(
        'flex items-center border-[1.5px] bg-brand-light rounded-full border-brand-primary ',
        className
      )}
    >
      {tabs.map((tab, index) => (
        <GenericButton
          key={index}
          onClick={() => handleSelectTab(tab)}
          className={cn(
            `text-brand-md md:text-brand-md xl:text-brand-md leading-none ${tabStyles.normal}`,
            {
              [tabStyles.active]: isActive(tab.id),
              'border-r-0 ': isActive(tab.id - 1) || isActive(tab.id + 1),
              'border-l-0 ': isActive(tab.id - 1) || isActive(tab.id + 1),
            }
          )}
          small
        >
          {tab.label}
        </GenericButton>
      ))}
    </div>
  );
};

const tabs = [
  {
    label: <>Today</>,
    view: <p>THIS IS THE TAB VIEW</p>,
  },
];

/*
 * <Tab>
 *   <TabControl></TabControl>
 *   <TabView></TabView>
 * </Tab>
 * * + * {
 *  border: none
 * }
 *
 *
 *
 */
