import * as React from "react";
import { SVGProps } from "react";

const Exit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    cursor="pointer"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    transform="scale(-1, 1) "
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M3 13h12v-2H3v2Z"
      fill={props.fill ? props.fill : "#fff"}
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="m5.793 7.793-3.5 3.5a1 1 0 0 0 0 1.414l3.5 3.5 1.414-1.414L4.414 12l2.793-2.793-1.414-1.414ZM8 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3h2v2h10V5H10v2H8V4Z"
      fill={props.fill ? props.fill : "#fff"}
      fillRule="evenodd"
    />
  </svg>
);

export default Exit;
