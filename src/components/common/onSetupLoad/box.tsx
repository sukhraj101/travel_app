import React from 'react';

const Box: React.FC = () => {
  return (
    <div>
      <svg
        className="yellow-cube"
        viewBox="0 0 300 230"
        role="presentation"
        aria-label="Cubes animation"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <g id="cube">
            <rect width="21" height="24" fill="var(--light-color)" stroke="var(--stroke-color)" transform="skewY(30)" />
            <rect width="21" height="24" fill="var(--dark-color)" stroke="var(--stroke-color)" transform="skewY(-30) translate(21 24.3)" />
            <rect width="21" height="21" fill="var(--main-color)" stroke="var(--stroke-color)" transform="scale(1.41,.81) rotate(45) translate(0 -21)" />
          </g>
        </defs>
        <line
          opacity="0.5"
          x1="80"
          x2="100"
          y1="155"
          y2="155"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          stroke="var(--light-color)"
          strokeDasharray="2.5"
        />
        <line
          opacity="0.5"
          x1="186"
          x2="204"
          y1="95"
          y2="95"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          stroke="var(--light-color)"
          strokeDasharray="2.5"
        />
        <line
          opacity="0.5"
          x1="112"
          x2="112"
          y1="75"
          y2="85"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          stroke="var(--light-color)"
          strokeDasharray="2.5"
        />
        <use xlinkHref="#cube" x="121" y="112" />
        <use xlinkHref="#cube" x="100" y="124" />
        <use xlinkHref="#cube" x="142" y="124" />
        <use xlinkHref="#cube" x="121" y="136" />
        <use className="mleft" xlinkHref="#cube" x="79" y="136" />
        <use xlinkHref="#cube" x="163" y="136" />
        <use xlinkHref="#cube" x="142" y="148" />
        <use xlinkHref="#cube" x="100" y="148" />
        <use xlinkHref="#cube" x="121" y="160" />
        <use xlinkHref="#cube" x="121" y="88" />
        <use xlinkHref="#cube" x="100" y="100" />
        <use xlinkHref="#cube" x="142" y="100" />
        <use xlinkHref="#cube" x="121" y="112" />
        <use xlinkHref="#cube" x="79" y="112" />
        <use xlinkHref="#cube" x="163" y="112" />
        <line
          opacity="0.5"
          x1="165"
          x2="185"
          y1="145"
          y2="145"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          stroke="var(--light-color)"
          strokeDasharray="2.5"
        />
        <use className="mright" xlinkHref="#cube" x="142" y="124" />
        <use xlinkHref="#cube" x="100" y="124" />
        <use xlinkHref="#cube" x="121" y="136" />
        <use xlinkHref="#cube" x="121" y="64" />
        <use className="mup" xlinkHref="#cube" x="100" y="76" />
        <use xlinkHref="#cube" x="142" y="76" />
        <use xlinkHref="#cube" x="121" y="88" />
        <use xlinkHref="#cube" x="79" y="88" />
        <use className="mright" xlinkHref="#cube" x="163" y="88" />
        <use xlinkHref="#cube" x="142" y="100" />
        <use xlinkHref="#cube" x="100" y="100" />
        <use xlinkHref="#cube" x="121" y="112" />
      </svg>
    </div>
  );
};

export default Box;
