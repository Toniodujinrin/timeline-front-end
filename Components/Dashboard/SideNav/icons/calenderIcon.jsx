const Calender = ({ fill }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1.6H11.6V0.4C11.6 0.293913 11.5579 0.192172 11.4828 0.117157C11.4078 0.0421428 11.3061 0 11.2 0C11.0939 0 10.9922 0.0421428 10.9172 0.117157C10.8421 0.192172 10.8 0.293913 10.8 0.4V1.6H5.2V0.4C5.2 0.293913 5.15786 0.192172 5.08284 0.117157C5.00783 0.0421428 4.90609 0 4.8 0C4.69391 0 4.59217 0.0421428 4.51716 0.117157C4.44214 0.192172 4.4 0.293913 4.4 0.4V1.6H2C1.46976 1.60064 0.961423 1.81155 0.586488 2.18649C0.211553 2.56142 0.000635143 3.06976 0 3.6V14C0.000635143 14.5302 0.211553 15.0386 0.586488 15.4135C0.961423 15.7884 1.46976 15.9994 2 16H14C14.5303 15.9996 15.0388 15.7887 15.4137 15.4137C15.7887 15.0388 15.9996 14.5303 16 14V3.6C15.9996 3.0697 15.7887 2.56124 15.4137 2.18625C15.0388 1.81127 14.5303 1.60042 14 1.6V1.6ZM15.2 14C15.2 14.3183 15.0736 14.6235 14.8485 14.8485C14.6235 15.0736 14.3183 15.2 14 15.2H2C1.68174 15.2 1.37652 15.0736 1.15147 14.8485C0.926428 14.6235 0.8 14.3183 0.8 14V7.2H15.2V14ZM15.2 6.4H0.8V3.6C0.8 2.9376 1.336 2.4 2 2.4H4.4V3.6C4.4 3.70609 4.44214 3.80783 4.51716 3.88284C4.59217 3.95786 4.69391 4 4.8 4C4.90609 4 5.00783 3.95786 5.08284 3.88284C5.15786 3.80783 5.2 3.70609 5.2 3.6V2.4H10.8V3.6C10.8 3.70609 10.8421 3.80783 10.9172 3.88284C10.9922 3.95786 11.0939 4 11.2 4C11.3061 4 11.4078 3.95786 11.4828 3.88284C11.5579 3.80783 11.6 3.70609 11.6 3.6V2.4H14C14.3183 2.4 14.6235 2.52643 14.8485 2.75147C15.0736 2.97652 15.2 3.28174 15.2 3.6V6.4Z"
        fill={fill}
      />
    </svg>
  );
};

export default Calender;
