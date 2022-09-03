export const handleDisplaySwitch = (event, dateCalcForm, timerCalcForm) => {
    const status = event.target.innerHTML;
    if (status === "Таймер") {
      event.target.innerHTML = "Калькулятор дат";
      dateCalcForm.style.display = "none";
      timerCalcForm.style.display = "block";
      return;
    }
    event.target.innerHTML = "Таймер";
    dateCalcForm.style.display = "block";
    timerCalcForm.style.display = "none";
  };

