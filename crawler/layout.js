let layout = {}

layout.EMPTY = 0
layout.WALL  = 1


/**
 * Generates a random layout based on the dimensions.
 * 
 * @param {number} width  x size of the layout
 * @param {number} height y size of the layout
 */
layout.generate = (width, height) => {
  let map = []

  for(let y = 0; y < height; y++) {
    map[y] = []
    for(let x = 0; x < width; x++) {
      let value = layout.EMPTY

      if(x == 0 || y == 0 || x == width-1 || y == height-1) value = layout.WALL

      map[y][x] = value
    }
  }

  return map
}

layout.print = (map) => {
  
}

// private methods

function split(map) {
  if(true) {

  }
  return map
}

/**
 * 
 * @param {*} min minimum random number
 * @param {*} max 
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = Object.freeze(layout)