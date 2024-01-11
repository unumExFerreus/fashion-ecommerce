const DoNotBleachSVG = () => {
  return (
    <svg
      //   width="28"
      //   height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_d_693_1259)">
        <path
          d="M8.65101 11.4464L4.8407 18.5405H20.9806L12.9881 3.54681L9.73526 9.33982"
          stroke=""
        />
        <path d="M4.77869 6.95447L22.8082 16.0002" stroke="" />
      </g>
      <defs>
        <filter
          id="filter0_d_693_1259"
          x="-3"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_693_1259"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_693_1259"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DoNotBleachSVG;
