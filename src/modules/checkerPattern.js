function checkerPattern(canvas, rows, columns, boxWidth, boxHeight, fill) {
  canvas.fillStyle = fill
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      canvas.fillRect(
        i % 2 ? j * (boxWidth * 2) + boxWidth : j * (boxWidth * 2),
        i * boxHeight,
        boxWidth,
        boxHeight
      )
      // for every iteration x=j * two widths(6px)
      // if the row(i) is even shift x over by 3px
    }
  }
}

export { checkerPattern }
