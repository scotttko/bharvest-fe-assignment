interface IcChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

function IcChevronDown({ size, color, ...props }: IcChevronDownProps) {
  return (
    <svg
      width={size ?? '24px'}
      height={size ?? '24px'}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="8"
      style={{ transform: 'rotate(-90deg)' }}
      {...props}
    >
      <path
        d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.2929 12.7071C7.9024 12.3166 7.9024 11.6834 8.2929 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
        fill={color ?? 'currentColor'}
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default IcChevronDown
