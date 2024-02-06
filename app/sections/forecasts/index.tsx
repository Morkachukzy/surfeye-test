import { SectionLayout } from '@/app/layouts/section';
import {
  forecastDataSet,
  todayForecastDataSet,
  tomorrowForecastDataSet,
} from './mocks/forecasts';
import { Tab, TabPanel, TabTriggers, Tabs } from '@/app/components/tab';
import { ForecastTable } from './table';
import { ForecastDay } from './day';

const tabs = [
  {
    id: 'today',
    label: 'Today',
  },
  {
    id: 'tomorrow',
    label: 'Tomorrow',
  },
  {
    id: 'one-week',
    label: 'One week',
  },
];

export const ForecastsSection = () => {
  return (
    <SectionLayout className="px-5 pb-11">
      <Tabs defaultSelectedTab="today">
        <div className="flex items-center justify-between pb-3 md:pb-9 gap-1 brand-min:gap-2">
          <h2 className="uppercase text-brand-md brand-min:text-lg md:text-xl lg:text-2xl font-bold">
            Forecasts
          </h2>
          <TabTriggers
            aria-label="forecast-data-vis"
            className="flex flex-shrink-0 items-center bg-brand-light border border-brand-primary rounded-full w-brand-fit gap:0.5 md:gap-1.5"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab.id}
                className="text-sm text-brand-primary py-2 px-2.5 md:px-6 md:py-2 lg:px-8 text-opacity-50 font-bold  bg-transparent [&.active-tab]:bg-brand-primary [&.active-tab]:text-brand-light [&.active-tab]:shadow-brand-1100"
              >
                {tab.label}
              </Tab>
            ))}
          </TabTriggers>
        </div>

        <div className="">
          <TabPanel tab="today">
            <ForecastDay dataSet={todayForecastDataSet} />
          </TabPanel>
          <TabPanel tab="tomorrow">
            <ForecastDay dataSet={tomorrowForecastDataSet} />
          </TabPanel>
          <TabPanel tab="one-week">
            <ForecastTable dataSet={forecastDataSet} />
          </TabPanel>
        </div>
      </Tabs>
    </SectionLayout>
  );
};
