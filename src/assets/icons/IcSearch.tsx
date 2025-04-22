interface IcBuyProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

function IcBuy({ size, color, ...props }: IcBuyProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? '20px'}
      height={size ?? '20px'}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? 'rgba(19, 19, 19, 0.63)'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
}

export default IcBuy
