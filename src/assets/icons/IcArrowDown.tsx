interface IcArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

function IcArrowDown({ size, color, ...props }: IcArrowDownProps) {
  return (
    <svg
      width={size ?? '24px'}
      height={size ?? '24px'}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      {...props}
    >
      <path
        d="M12 5V19"
        stroke={color ?? 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19 12L12 19L5 12"
        stroke={color ?? 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}

export default IcArrowDown
