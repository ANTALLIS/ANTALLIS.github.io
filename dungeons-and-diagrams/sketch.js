const numberOfTiles = 9;
const tileSize = 90;
const canvasSize = numberOfTiles * tileSize;
const AllLevels = [{
  name: "Level 1-1",
  hHints: [1, 4, 2, 7, 0, 4, 4, 4],
  vHints: [3, 2, 5, 3, 4, 1, 4, 4],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
.....###
.#.#...M
.#M#.###
.###...M
...#.###
.T.#...M
...#.###
####...M
`.trim(),
},
{
  name: "Tenaxxus's Gullet",
  hHints: [4, 4, 2, 6, 2, 3, 4, 7],
  vHints: [7, 3, 4, 1, 7, 1, 6, 3],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
#####M##
...#..##
.T.#.###
.......#
######.#
M......#
##.#.###
##M#...M
`.trim(),
},
{
  name: "The Twin Cities of the Dead",
  hHints: [1, 3, 1, 5, 3, 4, 3, 5],
  vHints: [5, 2, 2, 3, 6, 0, 6, 1],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
...#####
..T#T..#
...#...#
##.....#
M#.#####
........
.######.
....M#M.
`.trim(),
},
{
  name: "The Gardens of Hell",
  hHints: [1, 4, 3, 6, 3, 1, 4, 4],
  vHints: [6, 0, 4, 1, 5, 3, 3, 4],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
M######M
........
.#.##.#.
......#M
M#.##.##
#..#...#
..##T..#
M###...#
`.trim(),
},
{
  name: "The House Penumbral",
  hHints: [0, 4, 0, 7, 3, 4, 3, 2],
  vHints: [6, 2, 3, 1, 5, 1, 4, 1],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
M#M#####
...##..T
.#.##...
...#....
.#.#.###
...#....
.#.#.##.
.....#M.
`.trim(),
},
{
  name: "The Maze of the Minotaur",
  hHints: [7, 2, 6, 1, 3, 2, 6, 1],
  vHints: [0, 7, 3, 3, 3, 5, 2, 5],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
M.......
#######.
#M#T..#.
#.#...#.
#.#...#.
#.#.###.
#...#...
###...##
`.trim(),
},
{
  name: "The Halls of the Golemancer",
  hHints: [5, 3, 2, 4, 6, 4, 1, 5],
  vHints: [6, 3, 3, 3, 5, 3, 4, 3],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
#####M.#
#...##.M
#.T.#M.#
#...##.M
##.##M.#
...###.M
.###...#
.....###
`.trim(),
},
{
  name: "The Tomb of the Broken God",
  hHints: [1, 3, 3, 2, 6, 2, 4, 1],
  vHints: [1, 4, 1, 6, 2, 2, 5, 1],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
.T.#M...
...####.
....#...
###.#.##
....#.#M
.##.....
.##.###.
....#M..
`.trim(),
},
{
  name: "The Hive of Great Sorrow",
  hHints: [3, 6, 0, 5, 4, 0, 6, 3],
  vHints: [6, 2, 4, 3, 2, 4, 2, 4],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
##M##M##
M#....#M
.#.##.#.
.#.#M.#.
...##...
##....##
M..##..M
##....##
`.trim(),
},
{
  name: "The Lair of the Elemental King",
  hHints: [5, 2, 1, 2, 5, 4, 2, 3],
  vHints: [4, 1, 4, 2, 6, 2, 3, 2],
  monsterLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  treasureLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  wallLocations: create2dArray(numberOfTiles, numberOfTiles, false),
  data: `
#...###M
..#.....
.#M#.#.#
.....#.#
##.###.#
#...#...
#..T#.#.
#...#...
`.trim(),
}];

let spriteSheet = [];
let floorSprite = [];
let wallSprite = [];
let emptySprite = [];
let monsterSprite = [];
let treasureSprite = [];
let squareSprite;

let levelNumber = 0;
let level = AllLevels[levelNumber];

let playerWalls = Array.from({ length: numberOfTiles }, () => Array(numberOfTiles).fill(null));

let mouseWasClicked = false;

function preload() {
  spriteSheet = loadImage("sprites-one-no-bg.png");
}

function setup() {
  createCanvas(canvasSize, canvasSize + (50 * 2));
  noSmooth();
  const spriteSize = 10
  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 3; j++) {
      floorSprite.push(spriteSheet.get((25 + i) * spriteSize, (1 + j) * spriteSize, spriteSize, spriteSize));
    }
  }
  wallSprite = spriteSheet.get(7 * spriteSize, 3 * spriteSize, spriteSize, spriteSize);
  emptySprite = spriteSheet.get(1 * spriteSize, 27 * spriteSize, spriteSize, spriteSize);

  monsterSprite.push(spriteSheet.get(26 * spriteSize, 10 * spriteSize, spriteSize, spriteSize));
  monsterSprite.push(spriteSheet.get(26 * spriteSize, 11 * spriteSize, spriteSize, spriteSize));

  treasureSprite.push(spriteSheet.get(12 * spriteSize, 1 * spriteSize, spriteSize, spriteSize));
  treasureSprite.push(spriteSheet.get(12 * spriteSize, 1 * spriteSize, spriteSize, spriteSize));

  squareSprite = spriteSheet.get(21 * spriteSize, 19 * spriteSize, spriteSize, spriteSize);
  parseMonsters();
  parseTreasure();
  parseWalls();
}

function create2dArray(width, length, fillWith) {
  return Array.from({ length: width }, () => Array(length).fill(fillWith));
}

function checkWin() {
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      const value = level.wallLocations[x][y];
      const playerVal = playerWalls[x][y];
      if (value === true && value !== playerVal) {
        return false;
      } else if (value === false && playerVal === true) {
        return false;
      }
    }
  }
  return true;
}

function mousePressed() {
  let tileX = Math.floor(mouseX / tileSize);
  let tileY = Math.floor(mouseY / tileSize);
  if (tileX < 1 || tileX > 8 || tileY < 1 || tileY > 8) {
    return false;
  }
  if (level.treasureLocations[tileX][tileY] || level.monsterLocations[tileX][tileY]) {
    return false;
  }
  let wallState = playerWalls[tileX][tileY];
  if (mouseButton === LEFT) {
    if (wallState === false) {
      playerWalls[tileX][tileY] = true;
    } else if (wallState === null) {
      playerWalls[tileX][tileY] = true;
    } else if (wallState === true) {
      playerWalls[tileX][tileY] = null;
    }
  } else if (mouseButton === RIGHT) {
    if (wallState === false) {
      playerWalls[tileX][tileY] = null;
    } else if (wallState === null) {
      playerWalls[tileX][tileY] = false;
    } else if (wallState === true) {
      playerWalls[tileX][tileY] = null;
    }
  }
  return false;
}

function keyPressed() {
  if (key === 'n') {
    levelNumber += 1;
    levelNumber %= AllLevels.length;
    level = AllLevels[levelNumber];
    playerWalls = Array.from({ length: numberOfTiles }, () => Array(numberOfTiles).fill(null));
    parseMonsters();
    parseTreasure();
    parseWalls();
  }
}

function drawFloor() {
  push();
  tint('green');
  for (let y = 0; y < numberOfTiles; y++) {
    for (let x = 0; x < numberOfTiles; x++) {
      if (x === 0 || y === 0) {
        stroke('black');
        square(x * tileSize, y * tileSize, tileSize)
      } else {
        const idx = (x * numberOfTiles + y) % floorSprite.length;
        image(floorSprite[idx], x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
  pop();
}

function parseWalls() {
  let currentChar = "";
  let x = 1;
  let y = 1;
  for (let i = 0; i < level.data.length; i++) {
    currentChar = level.data.charAt(i);
    if (currentChar == '\n') {
      y += 1;
      x = 1;
      continue;
    } else if (currentChar == '#') {
      level.wallLocations[x][y] = true;
    }
    x += 1;
  }
}

function countWalls() {
  let hCount = Array(numberOfTiles).fill(0);
  let vCount = Array(numberOfTiles).fill(0);
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      const value = playerWalls[x][y];
      if (value === true) {
        hCount[x]++;
        vCount[y]++;
      }
    }
  }
  return [hCount, vCount];
}

function drawWalls() {
  push();
  tint('purple');
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      const value = playerWalls[x][y];
      if (value === true) {
        image(wallSprite, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (value === false) {
        image(emptySprite, x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
  pop();
}

function drawAllWalls() {
  push();
  tint('brown');
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      const value = level.wallLocations[x][y];
      if (value === true) {
        image(wallSprite, x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
  pop();
}

function parseMonsters() {
  let currentChar = "";
  let x = 1;
  let y = 1;
  for (let i = 0; i < level.data.length; i++) {
    currentChar = level.data.charAt(i);
    if (currentChar == '\n') {
      y += 1;
      x = 1;
      continue;
    } else if (currentChar == 'M') {
      level.monsterLocations[x][y] = true;
    }
    x += 1;
  }
}

function drawMonsters() {
  push();
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      if (level.monsterLocations[x][y]) {
        tint('black');
        image(squareSprite, x * tileSize, y * tileSize, tileSize, tileSize);
        tint('red')
        const idx = (x * numberOfTiles + y) % monsterSprite.length;
        image(monsterSprite[idx], x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
  pop();
}

function drawNumbers() {
  push();
  const wallCount = countWalls();
  textSize(50);
  for (let i = 0; i < level.hHints.length; i++) {
    stroke('blue');
    fill('blue');
    let total = wallCount[0][i + 1];
    if (total > level.hHints[i]) {
      fill('red');
    } else if (total === level.hHints[i]) {
      fill('grey');
    }
    text(level.hHints[i], (i + 1) * tileSize + (tileSize / 2), tileSize - (tileSize / 2));

    stroke('blue');
    fill('blue');
    total = wallCount[1][i + 1];
    if (total > level.vHints[i]) {
      fill('red');
    } else if (total === level.vHints[i]) {
      fill('grey');
    }
    text(level.vHints[i], tileSize - (tileSize / 2), (i + 1) * tileSize + (tileSize / 2));
  }
  pop();
}

function parseTreasure() {
  let currentChar = "";
  let x = 1;
  let y = 1;
  for (let i = 0; i < level.data.length; i++) {
    currentChar = level.data.charAt(i);
    if (currentChar == '\n') {
      y += 1;
      x = 1;
      continue;
    } else if (currentChar == 'T') {
      level.treasureLocations[x][y] = true;
    }
    x += 1;
  }
}

function drawTreasure() {
  push();
  tint('gold');
  for (let x = 0; x < numberOfTiles; x++) {
    for (let y = 0; y < numberOfTiles; y++) {
      if (level.treasureLocations[x][y]) {
        const idx = (x * numberOfTiles + y) % treasureSprite.length;
        image(treasureSprite[idx], x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
  pop();
}

function draw() {
  // background(220);
  background('black');
  drawFloor();
  drawMonsters();
  drawTreasure();
  drawNumbers();
  drawAllWalls();
  drawWalls();
  textSize(50);

  textSize(20);
  fill('purple');
  stroke('purple');
  text(level.name, 20, 840);
  let playerWin = checkWin();
  if (playerWin) {
    text("You win pooks!, Now claim your prize [me :3]", 20, 870);
  }
}
