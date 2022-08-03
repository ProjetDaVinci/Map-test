import * as React from "react";
import { SVGProps } from "react";

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    cursor="pointer"
  >
    <path
      d="M16 1.51 14.389 0 8 5.99 1.611 0 0 1.51 6.389 7.5 0 13.49 1.611 15 8 9.01 14.389 15 16 13.49 9.611 7.5 16 1.51Z"
      fill={props.fill ? props.fill : "#fff"}
    />
  </svg>
);

export default Close;
