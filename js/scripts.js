//User Interface Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event) {
    event.preventDefault();

    var userNum = $("input#userInput").val();
    $("#initialNum").text(userNum);






//Business Logic
  var beep = "Beep!"
  var boop = "Boop!"
  var sorryDave ="I'm sorry, Dave. I'm afraid I can't do that."

  var numArray = [];

  debugger;
  for (var i = 0; i <= userNum; i++) {
    numArray.push(i);
  }

  alert(numArray);
var rangeString = numArray.toString();
alert(rangeString);

var digit1 = rangeString.includes(1);
//var digit2 = rangeString.includes("2");
//var digit3 = rangeString.includes("3");

if (digit1) {
  rangeString.replace(1,"beep");
}
//$("#result").text(numArray)
alert(rangeString);
});
});
