var mydays, myhour, myminute, mysecond;
var currentDays, currentHours, currentMinutes, currentSeconds;

function flipNumber(el, newnumber) {
  var currentNumber = el.find(".bottom .text").text();
  if (currentNumber !== newnumber) {
    var thistop = el.find(".top").clone();
    var thisbottom = el.find(".bottom").clone();
    thistop.addClass("new");
    thisbottom.addClass("new");
    thisbottom.find(".text").text(newnumber);
    el.find(".top").after(thistop);
    el.find(".top.new").append(thisbottom);
    el.addClass("flipping");
    el.find(".top:not(.new)").find(".text").text(newnumber);
    setTimeout(function () {
      el.find(".bottom:not(.new)").find(".text").text(newnumber);
    }, 500);
  }
}

function setTime() {
  $(".flipper").removeClass("flipping");
  $(".flipper .new").remove();
  var endTime = new Date("September 1, 2023 00:00:00 GMT+08:00");
  endTime = Date.parse(endTime) / 1000;
  var now = Math.floor(Date.now() / 1000);
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (days !== currentDays) {
    flipNumber($(mydays[0]).closest(".flipper"), days);
    currentDays = days;
  }
  if (hours !== currentHours) {
    flipNumber($(myhour[0]).closest(".flipper"), hours);
    currentHours = hours;
  }
  if (minutes !== currentMinutes) {
    flipNumber($(myminute[0]).closest(".flipper"), minutes);
    currentMinutes = minutes;
  }
  flipNumber($(mysecond[mysecond.length - 1]).closest(".flipper"), seconds);
  setTimeout(setTime, 1000);
}

$(function () {
  mydays = $(".clock .flipper:nth-child(1) .text");
  myhour = $(".clock .flipper:nth-child(2) .text");
  myminute = $(".clock .flipper:nth-child(3) .text");
  mysecond = $(".clock .flipper:nth-child(4) .text");
  currentDays = null;
  currentHours = null;
  currentMinutes = null;
  setTime();
});