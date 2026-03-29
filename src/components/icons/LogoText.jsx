import * as React from 'react'
const SvgLogoText = ({ title, titleId, ...props }) => (

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 1"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
        {title ? <title id={titleId}>{title}</title> : null}
  <defs>
    <style>
      {`
        .text-iknow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 52px;
          font-weight: bold;
          fill: #3B2E2D; /* สีดำ/น้ำตาลเข้ม ตามโลโก้ */
        }
        .text-plus {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 52px;
          font-weight: bold;
          fill: #EF2F2C; /* สีแดง ตามโลโก้ */
        }
      `}
    </style>
  </defs>

  <text x="10" y="10">
    <tspan class="text-iknow">iknow</tspan><tspan class="text-plus">plus</tspan>
  </text>
</svg>

)
export default SvgLogoText



