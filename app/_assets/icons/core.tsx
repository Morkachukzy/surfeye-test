export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Icon = ({ children, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 28 27"
      fill="none"
      {...props}
    >
      {children}
    </svg>
  );
};
