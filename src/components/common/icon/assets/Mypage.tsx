const Mypage = ({ width, height, color }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.0003 0.666992C6.64033 0.666992 0.666992 6.64033 0.666992 14.0003C0.666992 21.3603 6.64033 27.3337 14.0003 27.3337C21.3603 27.3337 27.3337 21.3603 27.3337 14.0003C27.3337 6.64033 21.3603 0.666992 14.0003 0.666992ZM22.4803 20.4403C20.5737 18.1203 15.947 17.3337 14.0003 17.3337C12.0537 17.3337 7.42699 18.1203 5.52033 20.4403C4.16033 18.6537 3.33366 16.427 3.33366 14.0003C3.33366 8.12033 8.12033 3.33366 14.0003 3.33366C19.8803 3.33366 24.667 8.12033 24.667 14.0003C24.667 16.427 23.8403 18.6537 22.4803 20.4403ZM9.33366 10.667C9.33366 8.08033 11.4137 6.00033 14.0003 6.00033C16.587 6.00033 18.667 8.08033 18.667 10.667C18.667 13.2537 16.587 15.3337 14.0003 15.3337C11.4137 15.3337 9.33366 13.2537 9.33366 10.667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Mypage;