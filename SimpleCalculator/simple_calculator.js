function getHistory() {
  return document.getElementById("history-value").innerText;
}
//alert(getHistory());
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
//printHistory("99+12*x")
function getOutput() {
  return document.getElementById("output-value").innerText;
}
//alert(getOutput())
function printOutput(num) {
  //    document.getElementById("output-value").innerText=num;
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
//printOutput("9876543400")
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
//alert(reverseNumberFormat(getOutput()))
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    //        alert("THe operator clicked:" + this.id)
    //        alert(operator.length)
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
          //         printHistory(history);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function() {
    //        alert("THe operator clicked:" + this.id)
    //        alert(number.length)
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}