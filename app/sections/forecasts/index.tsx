import { SectionLayout } from '@/app/layouts/section';
import { forecastDataSet } from './mocks/forecasts';
import { Tab, TabPanel, TabTriggers, Tabs } from '@/app/components/tab';
import { ForecastTable } from './forecast-table';
import { ForecastChart } from './forecast-chart';

const tabs = [
  {
    id: 'today',
    label: 'Today',
    render: ForecastChart,
  },
  {
    id: 'tomorrow',
    label: 'Tomorrow',
    render: ForecastChart,
  },
  {
    id: 'one-week',
    label: 'One week',
    render: ForecastTable,
  },
];

export const ForecastsSection = () => {
  return (
    <SectionLayout className="px-5">
      <Tabs defaultSelectedTab="today">
        <div className="flex items-center justify-between brand-big-tablet:pb-4">
          <h2 className="uppercase text-xl md:text-2xl font-bold">Forecasts</h2>
          <TabTriggers
            aria-label="forecast-data-vis"
            className="flex items-center bg-brand-light border border-brand-primary rounded-full w-brand-fit gap:0.5 md:gap-1.5"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab.id}
                className="text-brand-primary py-2 px-6 md:py-2 md:px-8 text-opacity-50 bg-brand-light [&.active-tab]:bg-brand-primary [&.active-tab]:text-brand-light"
              >
                {tab.label}
              </Tab>
            ))}
          </TabTriggers>
        </div>

        <div className="">
          {tabs.map((tab) => (
            <TabPanel key={tab.id} tab={tab.id}>
              <tab.render dataSet={forecastDataSet} />
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </SectionLayout>
  );
};
