let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let num = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      num = eval(num);
      input.value = num;
    } else if (e.target.innerHTML == "AC") {
      num = "";
      input.value = num;
    } else if (e.target.innerHTML == "DEL") {
      num = num.substring(0, num.length - 1);
      input.value = num;
    } else {
      num += e.target.innerHTML;
      input.value = num;
    }
  });
});
