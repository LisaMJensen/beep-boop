




//Business Logic
  var beep = " Beep! "
  var boop = " Boop! "
  var sorryDave =" I'm sorry, Dave. I'm afraid I can't do that. "
//debugger;
  var numArray = [];
  for (var i = 0; i <= userNum; i++) {
//numArray.push(i);
    var rangeString = i.toString();
  //  alert(rangeString);

  if (rangeString.includes('3')) {
    numArray.push(sorryDave);
    //var result = rangeString.replace(3,sorryDave);
  } else if (rangeString.includes('2')){
    numArray.push(boop);
    //var result = rangeString.replace(2,boop);
  } else if (rangeString.includes('1')){
    numArray.push(beep);
  //var result = rangeString.replace(1,beep);
} else numArray.push(i);

}

alert(numArray)

//User Interface Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event) {
    event.preventDefault();

    var userNum = $("input#userInput").val();
    $("#initialNum").text(userNum);
    $("#result").text(numArray);
});
});
