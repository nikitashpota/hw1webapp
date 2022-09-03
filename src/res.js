export const res = (seti, second, minute, startButton) => {
    clearInterval(seti);
    minute.value = "00";
    second.value = "00";
    minute.removeAttribute("disabled");
    second.removeAttribute("disabled");
    startButton.innerHTML = "Старт";
  };