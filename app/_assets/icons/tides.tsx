import { Icon, type IconProps } from './core';

export const TidesIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.48877 32.9565C0.48877 32.9918 0.48877 33.0272 0.48877 33.0625C0.68736 50.5539 14.9417 64.6936 32.4839 64.6936C50.1364 64.6936 64.4793 50.3575 64.4793 32.6984C64.4793 15.0392 50.1364 0.703125 32.4839 0.703125C14.8314 0.703125 0.48877 15.0392 0.48877 32.6984C0.48877 32.7844 0.48877 32.8705 0.48877 32.9565ZM58.742 46.1805C58.08 45.9709 57.3962 45.8628 56.7121 45.8628C54.7483 45.8628 52.8725 46.752 51.4823 48.3187L51.4602 48.3341C49.6288 50.3862 47.1575 51.5292 44.5758 51.5292C41.9941 51.5292 39.5007 50.3862 37.6913 48.3341L37.6692 48.3187C36.2791 46.752 34.4035 45.8628 32.4176 45.8628C30.4538 45.8628 28.5782 46.752 27.1881 48.3187L27.166 48.3341C25.3346 50.3862 22.8632 51.5292 20.2815 51.5292C17.6999 51.5292 15.2285 50.3862 13.3971 48.3341L13.1102 48.0142C11.7863 46.5336 10.021 45.6929 8.14547 45.6995C7.46143 45.6995 6.79968 45.8164 6.15978 46.0349C11.0363 55.6268 20.9877 62.2068 32.4839 62.2068C43.9139 62.2068 53.8214 55.693 58.742 46.1805ZM61.9856 33.1838L61.9635 33.1485C60.5734 31.5841 58.676 30.6926 56.7121 30.6926C54.7483 30.6926 52.8725 31.5841 51.4823 33.1485L51.4602 33.164C49.6288 35.2183 47.1575 36.3613 44.5758 36.3613C41.9941 36.3613 39.5007 35.2183 37.6913 33.164L37.6692 33.1485C36.2791 31.5841 34.4035 30.6926 32.4176 30.6926C30.4538 30.6926 28.5782 31.5841 27.1881 33.1485L27.166 33.164C25.3346 35.2183 22.8632 36.3613 20.2815 36.3613C17.6999 36.3613 15.2285 35.2183 13.3971 33.164L13.1102 32.844C11.7863 31.3634 10.021 30.5249 8.14547 30.5293C6.29196 30.5359 4.50466 31.3877 3.20279 32.8749L2.98219 33.1309C3.02632 36.9857 3.82073 40.6619 5.23293 44.0225C6.15968 43.6761 7.15251 43.4951 8.14547 43.4929C10.6168 43.4841 12.9999 44.5763 14.7651 46.5468L15.052 46.8668C16.4421 48.4334 18.3177 49.3227 20.2815 49.3227C22.2454 49.3227 24.143 48.4334 25.5332 46.8668V46.8513C27.3646 44.797 29.8359 43.6562 32.4176 43.6562C34.9993 43.6562 37.4927 44.797 39.3242 46.8513V46.8668C40.7143 48.4334 42.6119 49.3227 44.5758 49.3227C46.5396 49.3227 48.4152 48.4334 49.8053 46.8668L49.8274 46.8513C51.6589 44.797 54.1305 43.6562 56.7121 43.6562C57.7272 43.6562 58.7198 43.8305 59.6686 44.1703C61.1028 40.7832 61.9194 37.074 61.9856 33.1838ZM8.60903 15.3746C5.56398 19.5583 3.60014 24.5672 3.09263 30.0019C4.59309 28.9163 6.33609 28.3294 8.14547 28.3227C10.6168 28.3161 12.9999 29.4084 14.7651 31.3788L15.052 31.6988C16.4421 33.2633 18.3177 34.1547 20.2815 34.1547C22.2454 34.1547 24.143 33.2633 25.5332 31.6988V31.6834C27.3646 29.629 29.8359 28.486 32.4176 28.486C34.9993 28.486 37.4927 29.629 39.3242 31.6834V31.6988C40.7143 33.2633 42.6119 34.1547 44.5758 34.1547C46.5396 34.1547 48.4152 33.2633 49.8053 31.6988L49.8274 31.6834C51.6589 29.629 54.1305 28.486 56.7121 28.486C58.5656 28.486 60.3526 29.0664 61.8751 30.1432C61.4118 24.7216 59.4922 19.7171 56.4692 15.5291C54.5936 15.5975 52.8063 16.4779 51.4823 17.9806L51.4602 17.996C49.6288 20.0503 47.1575 21.1911 44.5758 21.1911C41.9941 21.1911 39.5007 20.0503 37.6913 17.996L37.6692 17.9806C36.2791 16.4139 34.4035 15.5246 32.4176 15.5246C30.4538 15.5246 28.5782 16.4139 27.1881 17.9806L27.166 17.996C25.3346 20.0503 22.8632 21.1911 20.2815 21.1911C17.6999 21.1911 15.2285 20.0503 13.3971 17.996L13.1102 17.6761C11.8966 16.3146 10.3081 15.4938 8.60903 15.3746ZM54.8805 13.5101C49.4744 7.19485 41.4425 3.18993 32.4839 3.18993C23.5694 3.18993 15.5817 7.1463 10.1756 13.3975C11.8967 13.819 13.4853 14.7854 14.7651 16.2087L15.052 16.5286C16.4421 18.0953 18.3177 18.9845 20.2815 18.9845C22.2454 18.9845 24.143 18.0953 25.5332 16.5286V16.5132C27.3646 14.4611 29.8359 13.3181 32.4176 13.3181C34.9993 13.3181 37.4927 14.4611 39.3242 16.5132V16.5286C40.7143 18.0953 42.6119 18.9845 44.5758 18.9845C46.5396 18.9845 48.4152 18.0953 49.8053 16.5286L49.8274 16.5132C51.2175 14.9509 52.9829 13.9139 54.8805 13.5101Z"
      fill="#01243C"
    />
  </Icon>
);