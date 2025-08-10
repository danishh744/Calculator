let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let btnText = e.target.innerHTML;

    if (btnText == '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
      }
    } else if (btnText == 'AC') {
      string = "";
      input.value = string;
    } else if (btnText == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += btnText;
      input.value = string;
    }
  });
});
