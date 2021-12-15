var newTime = new Date();
var currentTime = newTime.getHours();
console.log(currentTime);

function currentDate() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var thisDate = newTime.toLocaleDateString("en-US", options);
  document.getElementById("currentDay").innerHTML = thisDate;
}
currentDate();

$(".time-div").each(function () {
  var timeDiv = $(this).attr("id").split("-")[1];

  if (currentTime == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("white-text");
  } else if (currentTime < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");
  } else if (currentTime > timeDiv) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }
});

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
