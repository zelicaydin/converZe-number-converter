var language1 = null;
var language2 = null;

function toggleButtons(buttonId) {
  const buttons = document.querySelectorAll('.language-button');
  const clickedButton = document.getElementById(buttonId);

  buttons.forEach((div) => div.classList.remove('highlighted'));

  clickedButton.classList.add('highlighted');

  language1 = buttonId;
}

function toggleButtons2(buttonId) {
  const buttons = document.querySelectorAll('.language-button-2');
  const clickedButton2 = document.getElementById(buttonId);

  buttons.forEach((div) => div.classList.remove('highlighted'));

  clickedButton2.classList.add('highlighted');

  language2 = buttonId;
}

function erase(copyId) {
  const copyButton = document.getElementById(copyId);
  copyButton.style.display = 'none';
  document.getElementById("input-field").value = "";
  document.getElementById("output-field").value = "";
}

function processInput(copyId) {
  var userInput = document.getElementById("input-field").value;

  if(document.getElementById("input-field").value != "") {
    const copyButton = document.getElementById(copyId);
    copyButton.style.display = 'block';

  if(language1 == null || language2 == null) {
    document.getElementById("output-field").value = "Input and output must be chosen."
  }

  else if(language1 == "binary1" && language2 == "binary2") {
    document.getElementById("output-field").value = userInput;
  }

  else if(language1 == "binary1" && language2 == "decimal2") {
    document.getElementById("output-field").value = parseInt(userInput, 2);
  }
  
  else if(language1 == "binary1" && language2 == "octal2") {
    var value1 = parseInt(userInput, 2);
    var value2 = value1.toString(8);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "binary1" && language2 == "hex2") {
    var value1 = parseInt(userInput, 2);
    var value2 = value1.toString(16);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "decimal1" && language2 == "decimal2") {
    document.getElementById("output-field").value = userInput;
  }

  else if(language1 == "decimal1" && language2 == "binary2") {
    document.getElementById("output-field").value = Number(userInput).toString(2);
  }
  
  else if(language1 == "decimal1" && language2 == "octal2") {
    document.getElementById("output-field").value = Number(userInput).toString(8);
  }

  else if(language1 == "decimal1" && language2 == "hex2") {
    document.getElementById("output-field").value = Number(userInput).toString(16);
  }

  else if(language1 == "octal1" && language2 == "octal2") {
    document.getElementById("output-field").value = userInput;
  }

  else if(language1 == "octal1" && language2 == "binary2") {
    var value1 = parseInt(userInput, 8);
    var value2 = value1.toString(2);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "octal1" && language2 == "decimal2") {
    document.getElementById("output-field").value = parseInt(userInput, 8);
  }

  else if(language1 == "octal1" && language2 == "hex2") {
    var value1 = parseInt(userInput, 8);
    var value2 = value1.toString(16);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "hex1" && language2 == "hex2") {
    document.getElementById("output-field").value = userInput;
  }

  else if(language1 == "hex1" && language2 == "binary2") {
    var value1 = parseInt(userInput, 16);
    var value2 = value1.toString(2);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "hex1" && language2 == "octal2") {
    var value1 = parseInt(userInput, 16);
    var value2 = value1.toString(8);
    document.getElementById("output-field").value = value2;
  }

  else if(language1 == "hex1" && language2 == "decimal2") {
    document.getElementById("output-field").value = parseInt(userInput, 16);
    }
  }
}

function copyToClipboard() {
    var copyText = document.getElementById("output-field");
    navigator.clipboard.writeText(copyText.value);
}