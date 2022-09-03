

export const calculation = (second, minute, res) => {
  if (second.value > 0) {
    second.value -= 1;
    if (second.value < 10 && second.value >= 0) {
      second.value = "0" + second.value;
    }
  } else if (minute.value > 0) {
    second.value = "59";
    minute.value -= 1;
    if (minute.value < 10 && minute.value >= 0) {
      minute.value = "0" + minute.value;
    }
  } else {
    clearInterval(this);
    setTimeout(function () {
      alert("Время вышло !");
      res();
    }, 100);
  }
};
