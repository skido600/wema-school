import { Show } from "./Toast.js";

const color_generated = document.querySelector(".color_generated");
const btn = document.querySelector(".btn");

function Generate_color() {
  const input = document.querySelector("input").value;
  color_generated.innerHTML = "";
  for (let i = 0; i < input; i++) {
    let color =
      "#" +
      Math.floor(Math.random() * 16234562)
        .toString(16)
        .padStart(6, "0");

    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.classList.add("div_color");
    div.textContent = color;

    // Copy function
    div.addEventListener("click", () => {
      navigator.clipboard
        .writeText(color)
        .then(() => {
          Show(`Copied ${color} to clipboard!`);
        })
        .catch(Show(`fail to ${color} to clipboard!`));
    });

    color_generated.appendChild(div);
  }
}

btn.addEventListener("click", Generate_color);
