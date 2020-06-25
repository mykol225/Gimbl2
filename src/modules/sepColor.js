var colorcolor = require('colorcolor')

function sepColor(color, noAlpha) {
  if (noAlpha) {
    return colorcolor(color, 'rgb')
  }
  return colorcolor(color, 'rgba')
}

export { sepColor }

// [x] take in any valid color
// [x] convert to rgba (using colorcolor)
// [x] separate out alpha channel

// [ ] return the original color string
// [ ] return the non-alpha color string
