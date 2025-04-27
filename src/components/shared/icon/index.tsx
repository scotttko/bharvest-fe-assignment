import * as Icons from '@/assets/icons'

export type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  color?: string
  size?: number
}

function Icon({ name, size = 20, color, ...props }: IconProps) {
  const IconComponent = Icons[name]

  return <IconComponent {...props} size={size} color={color} />
}

export default Icon
