//User Interface Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event) {
    event.preventDefault();

    var userNum = $("input#userInput").val();
    $("#initialNum").text(userNum);






//Business Logic
  var beep = " Beep! "
  var boop = " Boop! "
  var sorryDave =" I'm sorry, Dave. I'm afraid I can't do that. "
debugger;
  var numArray = [];
  for (var i = 0; i <= userNum; i++) {
    numArray.push(i);
    var rangeString = numArray.toString();
  //  alert(rangeString);
}

  if (rangeString.includes("3")) {
    var result = numArray.replace(/"3"/,sorryDave);
  } else if (rangeString.includes("2")){
    var result = numArray.replace(/"2"/,boop);
  } else if (rangeString.includes("2")){
  var result = numArray.replace(/"1"/,beep);
} else var result = numArray.push(i);

alert(result)


});
});
