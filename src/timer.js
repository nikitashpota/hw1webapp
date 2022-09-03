import { calculation } from "./calculation.js";
// import { res } from "./res.js";

const minute = document.getElementById("min");
const second = document.getElementById("sec");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
let seti = undefined;
let mm = "25";
let ss = "00";

const start = () => {
  if (startButton.innerHTML === "Старт") {
    startButton.innerHTML = "Пауза";

    mm = minute.value;
    ss = second.value;

    if (minute.value === "") minute.value = "00";
    if (second.value === "") second.value = "00";

    minute.setAttribute("disabled", true);
    second.setAttribute("disabled", true);

    seti = setInterval(()=>{calculation(second, minute, res)}, 1000);
  } else {
    minute.removeAttribute("disabled");
    second.removeAttribute("disabled");
    startButton.innerHTML = "Старт";
    clearInterval(seti);
  }
};

const res = () => {
    clearInterval(seti);
    minute.value = "00";
    second.value = "00";
    minute.removeAttribute("disabled");
    second.removeAttribute("disabled");
    startButton.innerHTML = "Старт";
  };
  
export const timer = () => {
    startButton.addEventListener("click", start);
    resetButton.addEventListener("click", res);
}


