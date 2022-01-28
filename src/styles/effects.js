import { mainTheme } from './themes/main'

export function shadow (
  x = 3,
  y = 3,
  blur = 1,
  intensity = 5,
  color = mainTheme.colors.primary600
) {
  return `
    box-shadow: ${x}px ${y} ${blur}px ${intensity}px ${color};
    -webkit-box-shadow: ${x}px ${y}px ${blur}px ${intensity}px ${color};
    -moz-box-shadow: ${x}px ${y}px ${blur}px ${intensity}px ${color};
  `
}
