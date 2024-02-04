import { Icon, type IconProps } from './core';

export const PlayIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <circle cx="13" cy="13" r="13" fill="#EFEFEF" fillOpacity="0.54" />
    <path
      d="M9.36742 17.9724C9.36742 18.0418 9.40497 18.1057 9.46556 18.1394C9.52614 18.1732 9.60025 18.1715 9.65922 18.135L17.6886 13.1644C17.7449 13.1295 17.7792 13.068 17.7792 13.0018C17.7792 12.9356 17.7449 12.8741 17.6886 12.8393L9.65922 7.8687C9.60025 7.8322 9.52614 7.83049 9.46556 7.86424C9.40497 7.89799 9.36742 7.9619 9.36742 8.03125V17.9724Z"
      fill="white"
      stroke="white"
      strokeWidth="0.382353"
      strokeLinejoin="round"
    />
  </Icon>
);
