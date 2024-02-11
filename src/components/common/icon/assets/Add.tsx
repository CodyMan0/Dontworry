const Add = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M6.85664 14.1979C6.85449 15.0738 7.56284 15.7822 8.4388 15.78C9.31475 15.7779 10.0266 15.066 10.0288 14.1901L10.0401 9.5887L14.6961 9.57726C15.572 9.57511 16.2839 8.86326 16.286 7.98731C16.2882 7.11135 15.5798 6.403 14.7039 6.40515L10.0479 6.41659L10.0593 1.76036C10.0615 0.88441 9.3531 0.176054 8.47715 0.178207C7.60119 0.180359 6.88934 0.892206 6.88719 1.76816L6.87575 6.42439L2.27419 6.4357C1.39823 6.43785 0.686387 7.1497 0.684234 8.02565C0.682081 8.90161 1.39044 9.60996 2.26639 9.60781L6.86795 9.5965L6.85664 14.1979Z"
      />
    </svg>
  );
};
export default Add;
