import {
  SectionAltRow,
  SectionInfoLink,
  SectionLayout,
  SectionUpdateInfo,
} from '@/app/layouts/section';
import {
  forecastDataSet,
  todayForecastDataSet,
  tomorrowForecastDataSet,
} from './mocks/forecasts';
import { Tab, TabPanel, TabTriggers, Tabs } from '@/app/components/tab';
import { ForecastTable } from './table';
import { ForecastDay } from './day';
import { cn } from '@/app/_theme/utils';

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
    <SectionLayout className="px-5 pb-11" relativeId="forecasts">
      <Tabs defaultSelectedTab="today">
        <div className="flex items-center justify-between pb-3 md:pb-9 gap-1 brand-min:gap-2">
          <h2 className="uppercase text-brand-md  md:text-2xl lg:text-2xl font-bold">
            Forecasts
          </h2>
          <TabTriggers
            aria-label="analytics-data-vis"
            className="flex flex-shrink-0 items-center md:px-2 bg-brand-light border border-brand-primary rounded-full w-brand-fit gap:0.5 md:gap-1.5"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab.id}
                className={cn(
                  'text-xs md:text-[1rem] [&:not(&:first-child)]:border-l py-0 rounded-none border-brand-primary text-brand-primary px-2.5 md:px-3 lg:px-3 text-opacity-50 font-bold  bg-transparent ',
                  '[&.active-tab]:rounded-full [&.active-tab]:-mx-1 [&.active-tab]:md:-mx-3 [&.active-tab]:py-2  [&.active-tab]:md:py-3 [&.active-tab]:bg-brand-primary [&.active-tab]:text-brand-light [&.active-tab]:shadow-brand-1100 [&.active-tab]:px-4'
                )}
              >
                {tab.label}
              </Tab>
            ))}
          </TabTriggers>
        </div>
        <SectionAltRow className="mb-2 mt-0">
          <SectionUpdateInfo
            updatedAt="2024-02-05T11:59:20+0000"
            className="md:hidden gap-2"
          />
        </SectionAltRow>

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
      <SectionAltRow className="justify-end md:justify-between ">
        <SectionInfoLink
          name="Forecasts"
          url="/"
          className="flex-row-reverse md:flex"
        />
        <SectionUpdateInfo
          updatedAt="2024-02-05T11:59:20+0000"
          className="hidden md:flex"
        />
      </SectionAltRow>
    </SectionLayout>
  );
};
