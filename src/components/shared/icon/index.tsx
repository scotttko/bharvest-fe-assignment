import * as Icons from '@/assets/icons'

export type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  color?: string
  size?: number
}

function Icon({ name, size = 20, width: _width, height: _height, color, ...props }: IconProps) {
  const IconComponent = Icons[name]
  // const width = _width ?? size
  // const height = _height ?? size
  // const sizeProps = {
  //   ...(width !== undefined ? { width } : {}),
  //   ...(height !== undefined ? { height } : {}),
  // }

  return <IconComponent {...props} size={size} color={color} />
}

export default Icon
