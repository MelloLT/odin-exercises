const gridSize = 600;
let squaresPerSide = 16;
let colorMode = "black";

const resizeButton = document.querySelector("#resize");
const blueButton = document.querySelector("#blue");
const darkenButton = document.querySelector("#darken");
const randButton = document.querySelector("#rand");
const eraseButton = document.querySelector("#erase");

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${gridSize}px`;

function changeColor() {
  if (colorMode === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else if (colorMode === "blue") {
    this.style.backgroundColor = "rgb(51, 51, 255)";
  } else if (colorMode === "white") {
    this.style.backgroundColor = "white";
  } else if (colorMode === "darken") {
    let opacity = parseFloat(this.style.opacity) || 0;
    if (opacity < 1) {
      this.style.opacity = opacity + 0.1;
    }
    this.style.backgroundColor = "black";
  } else this.style.backgroundColor = "black";
}

function createGrids() {
  const numberOfSquares = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${gridSize / squaresPerSide - 2}px`;
  for (let i = 0; i < numberOfSquares; i++) {
    const gridTile = document.createElement("div");

    gridTile.style.width = gridTile.style.height = widthOrHeight;
    gridTile.classList.add("gridTile");
    sketchArea.appendChild(gridTile);

    gridTile.addEventListener("mouseover", changeColor);
  }
}

function clearTiles() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

resizeButton.addEventListener("click", function askAgain() {
  let answer = prompt("What size do you want to set? (1-100)");
  if (answer === null) {
    return;
  }
  let newSize = Number(answer);
  if (isNaN(newSize)) {
    alert("Enter a valid number");
    return askAgain();
  } else if (newSize > 100) {
    alert("No moe than 100 pls");
    return askAgain();
  } else if (newSize < 1) {
    alert("Bitch wtf no less than 0. Choose between 1 and 100");
    return askAgain();
  } else {
    squaresPerSide = newSize;
    clearTiles();
    createGrids();
  }
});

randButton.addEventListener("click", () => {
  colorMode = "random";
});

blueButton.addEventListener("click", () => {
  colorMode = "blue";
});

eraseButton.addEventListener("click", () => {
  colorMode = "white";
});

darkenButton.addEventListener("click", () => {
  colorMode = "darken";
});

createGrids();
