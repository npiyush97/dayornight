window.load = update();

function update() {
  let date = new Date().getHours();
  let h1 = document.querySelector("h1");
  console.log(date);
  let morning = 6;
  let noon = 12;
  let night = 7;
  if (date >= morning && date < noon) {
    h1.classList.remove("night");
    h1.classList.add("morning");
    h1.textContent = "GOOD MORNING";
  }
  if (date >= noon && date < night) {
    h1.classList.remove("morning");
    h1.classList.add("day");
    h1.textContent = "GOOD AFTERNOON";
  }
  if (date >= night || date < morning) {
    h1.classList.remove("day");
    h1.classList.add("night");
    console.log(h1.classList);
    h1.textContent = "GOOD NIGHT";
  }
  console.log("called");
}

setInterval(() => {
  console.log("running");
  update();
}, 30 * 60 * 1000);
