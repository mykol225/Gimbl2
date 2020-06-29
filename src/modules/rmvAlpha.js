var colorcolor = require('colorcolor')

function rmvAlpha(color, noAlpha) {
  if (noAlpha) {
    return colorcolor(color, 'rgb')
  }
  return colorcolor(color, 'rgba')
}

export { rmvAlpha }
