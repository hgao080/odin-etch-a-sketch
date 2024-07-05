const CONTAINER_WIDTH = 960;
const container = document.getElementById("container");
const btn = document.querySelector("button");

for (i = 0; i < (16 * 16); i++) {
    console.log(i);
    const pixel = document.createElement('div');
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "rgb(" + getRandomNumber() +", " + getRandomNumber() + ", " + getRandomNumber() + ")";
    })
  
    container.appendChild(pixel);
}

btn.addEventListener("click", () => {
  let input = parseInt(prompt("Please enter a new grid size (Max 100): "));
  while (input == NaN || input < 0 || input > 100) {
    input = parseInt(prompt("Please enter a valid number: "));
  }

  container.textContent = "";
  for (i = 0; i < (input * input); i++) {
    console.log(i);
    const pixel = document.createElement('div');
    pixel.className = "pixel";
    pixel.style.width = (1 / input * 100) + "%";
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "rgb(" + getRandomNumber() +", " + getRandomNumber() + ", " + getRandomNumber() + ")";
    })
  
    container.appendChild(pixel);
  }
})

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}