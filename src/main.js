import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { handleDisplaySwitch } from "./switchdisplay.js";
import {timer} from "./timer.js"

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const displaySwitch = document.getElementById("switch");

const timerCalcForm = document.getElementById("timercalc");
timerCalcForm.style.display = "none";

const handleCalcDates = (event) => {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
};

dateCalcForm.addEventListener("submit", handleCalcDates);
displaySwitch.addEventListener("click", (event) =>
  handleDisplaySwitch(event, dateCalcForm, timerCalcForm)
);

timer();

