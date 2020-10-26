import React from "react";
import "./body.css";

interface props {}

const Body: React.FC<props> = (props) => {
  return (
    <div className="fadeIn animated delay-three container">
      <h1> Hi, I'm Jamie. </h1>
      I'm a Frontend Technical Lead at Captur&nbsp;
      <svg className="logo" viewBox="0 0 1067 1067">
        <path
          fill="#49A499"
          d="M369.59 57.69C464.02 14.47 569.67-3.87 673.15 4.78c45.62 3.84 90.84 12.99 134.22 27.7 33.14 11.34 65.46 25.48 95.34 43.86 34.16 20.92 65.67 46.23 93.39 75.15-56.74 55.8-113.35 111.73-170.04 167.58-24.57-24.16-51.05-46.7-80.65-64.51-28.53-17.2-60.28-29.77-93.52-33.61-3.4-.34-6.63-1.62-9.56-3.33-86.82-59.9-178.59-112.45-272.74-159.93z"
        />
        <path
          fill="#323c4a"
          d="M109.44 328.13c42.15-103.18 118.57-192.75 215.98-247.5 85.85 43.71 170.5 90.04 251.37 142.46-94.6 13.33-181.22 74.7-224.42 160.02-11.51 22.53-20.08 46.51-25.97 71.1-86.04 56.96-167.23 120.93-245.36 188.24-8.43-44.93-11.67-90.84-9.59-136.51 2.86-60.79 14.67-121.46 37.99-177.81zM91.81 688.34c72.37-63.17 146.95-124.03 226.25-178.35-3.5 45.18 2.53 91.04 17.34 133.85 9.08 26.29 21.41 51.54 37.44 74.3 27.24 38.94 63.91 71.22 105.92 93.43 30.44 86.07 66.67 170.08 107.96 251.51-95.89-5.78-191.03-33.33-273.22-83.53-48.31-29.42-91.66-67.01-127.23-111.02-43.02-53.01-75.27-114.68-94.46-180.19zM731.29 828.19c38.68-15.36 72.87-41.13 99.61-72.9 54.06 57.91 108.86 115.14 162.9 173.07-50.45 46.96-112.89 79.23-177.6 101.76-58.6 20.36-120.2 32.68-182.3 34.17-37.54-74.92-73.3-150.97-101.16-230.09 34.18 9.53 69.77 14.35 105.28 13.12 31.85-1.11 63.66-7.18 93.27-19.13z"
        />
      </svg>
      <br />
      <p>
        I believe that the best software is shipped using a{" "}
        <b>customer-centric</b> approach and rapid iteration to deliver{" "}
        <b>the most value in the least time</b>. As such, I frequently
        apply my background in anthropology to build software products that have
        a <b>lasting impact</b> on how people interact with them.
      </p>
      <p>
        I am a big experimenter with new technologies and implementing them into
        my personal and work projects. I write about things{" "}
        <a href="https://medium.com/@jamiehaywood" className="blogLink black">
          here
        </a>
        .
      </p>
      <p>
        When I'm not developing software, I enjoy yachting, playing backgammon,
        and reading.
      </p>
    </div>
  );
};

export default Body;
