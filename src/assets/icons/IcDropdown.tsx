interface IcDropdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

function IcDropdown({ size, color, ...props }: IcDropdownProps) {
  return (
    <svg
      width={size ?? '12px'}
      height={size ?? '12px'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6979 16.2453L6.31787 9.75247C5.58184 8.66118 6.2058 7 7.35185 7L16.6482 7C17.7942 7 18.4182 8.66243 17.6821 9.75247L13.3021 16.2453C12.623 17.2516 11.377 17.2516 10.6979 16.2453Z"
        fill={color ?? 'currentColor'}
      ></path>
    </svg>
  )
}

export default IcDropdown
