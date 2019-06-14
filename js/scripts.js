//User Interface Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event) {
    event.preventDefault();

    var userNum = $("input#userInput").val();
    $("#initialNum").text(userNum);

    function result(numArray) {
      var result = numArray.toString();
      $("#result").text(numArray);
    }





//Business Logic
  var beep = " Beep! "
  var boop = " Boop! "
  var sorryDave =" I'm sorry, Dave. I'm afraid I can't do that. "
  var numArray = [];

  for (var i = 0; i <= userNum; i++) {
    var rangeString = i.toString();
    if (rangeString.includes('3')) {
      numArray.push(sorryDave);
    } else if (rangeString.includes('2')){
      numArray.push(boop);
    } else if (rangeString.includes('1')){
      numArray.push(beep);
  } else numArray.push(i);
  }

result(numArray)

});
});
