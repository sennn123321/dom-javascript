// const button = document.querySelector("#btn");
// button.addEventListener("click", () => {
//   alert("click");
// });

// const button2 = document.querySelector("#btn-2");
// button2.addEventListener("click", stepSatu);
// button2.addEventListener("click", stepDua);

// function stepSatu() {
//   console.log("step satu");
// }

// function stepDua() {
//   console.log("step dua");
// }

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");

// button.addEventListener("click", () => {
//   const newColor = generatedRandomColor();
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// });

// const generatedRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`;
// };

// const generatedRandomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`;
// };

// const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", colorize);
// }

// const headings = document.querySelectorAll("h1");

// for (let headung of headings) {
//   headung.addEventListener("click", colorize);
// }

// function colorize() {
//   this.style.backgroundColor = generatedRandomColor();
//   this.style.color = generatedRandomColor();
// }

// document.querySelector("button").addEventListener("click", (e) => {
//   console.log(e);
// });

// const input = document.querySelector("input");
// input.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("arrow up");
//       break;
//     case "ArrowDown":
//       console.log("arrow down");
//       break;
//     case "ArrowRight":
//       console.log("arrow right");
//       break;
//     case "ArrowLeft":
//       console.log("arrow Left");
//     default:
//       console.log("apaan tuh");
//   }
// });

const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
  console.log("nilai berhasil di ubah");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
