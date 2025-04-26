interface IcCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

function IcCheck({ size, color, ...props }: IcCheckProps) {
  return (
    <svg
      width={size ?? '14px'}
      height={size ?? '14px'}
      stroke={color ?? 'currentColor'}
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="8"
      strokeLinecap="round"
      {...props}
    >
      <line x1="11" y1="26" x2="18" y2="33" stroke={color ?? 'currentColor'}></line>
      <line x1="18" y1="33" x2="38" y2="14" stroke={color ?? 'currentColor'}></line>
    </svg>
  )
}

export default IcCheck
