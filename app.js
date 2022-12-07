const tds = document.querySelectorAll("td");
const displayer = document.getElementById("displayer");

let availableNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let firstNumber = 0;
let secondNumber = 0;
let found = 0;
let shot = 0;

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const updateShot = () => {
  displayer.textContent = `coup : ${shot}`;
};
updateShot();

const check = async (id) => {
  shot++;
  updateShot();
  if (firstNumber != 0) {
    if (secondNumber == 0) {
      secondNumber = id;
    }
  } else {
    firstNumber = id;
  }

  if (firstNumber != 0 && secondNumber != 0) {
    if (firstNumber == secondNumber) {
      firstNumber = secondNumber = 0;
      const elements = document.querySelectorAll(".checked");
      elements.forEach((element) => {
        element.classList.remove("checked");
      });
      found++;
    } else {
      firstNumber = secondNumber = 0;
      setTimeout(() => {
        const elements = document.querySelectorAll(".checked");
        elements.forEach((element) => {
          element.classList.remove("checked");
          element.style.background = 'url("imgs/unknow.png") center/cover';
        });
      }, 500);
    }
  }
  if (found == 8) {
    alert("Félicitations vous avez gagné");
  }
};

tds.forEach((element) => {
  element.style.background = 'url("imgs/unknow.png") center/cover';
  const max = availableNumbers.length;
  const elementId = availableNumbers[getRandom(max)];
  availableNumbers.splice(availableNumbers.indexOf(elementId), 1);
  element.dataset.id = elementId;

  element.addEventListener("click", (e) => {
    const elementId = e.target.dataset.id;
    element.style.background = `url("imgs/${elementId}.png") center/cover`;
    element.classList.add("checked");
    check(elementId);
  });
});

replay.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  found = 0;
  shot = 0;
  availableNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  tds.forEach((element) => {
    element.style.background = 'url("imgs/unknow.png") center/cover';
    const max = availableNumbers.length;
    const elementId = availableNumbers[getRandom(max)];
    availableNumbers.splice(availableNumbers.indexOf(elementId), 1);
    element.dataset.id = elementId;
  });
});
