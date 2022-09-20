// Dynamic Copyright Year

let thisYear = new Date();

$("#dynYear").text(thisYear.getFullYear());

$(document).ready(function(){

  //document.getElementById("one-bed-btn").disabled = true;



  //showOneBeds(); //set it up to show them manually?

});

$("#all-btn").click(function() {
  $("#all-btn").toggleClass("avail-btn-active");
  $("#one-bed-btn").removeClass("avail-btn-active");
  $("#two-bed-btn").removeClass("avail-btn-active");
  $("#three-bed-btn").removeClass("avail-btn-active");

  $("#one-bed-avail").show();
  $("#two-bed-avail").show();
  $("#three-bed-avail").show();

  document.getElementById("all-btn").disabled = true;
  document.getElementById("one-bed-btn").disabled = false;
  document.getElementById("two-bed-btn").disabled = false;
  document.getElementById("three-bed-btn").disabled = false;
});

$("#one-bed-btn").click(function() {
  $("#all-btn").removeClass("avail-btn-active");
  $("#one-bed-btn").toggleClass("avail-btn-active");
  $("#two-bed-btn").removeClass("avail-btn-active");
  $("#three-bed-btn").removeClass("avail-btn-active");

  $("#one-bed-avail").show();
  $("#two-bed-avail").hide();
  $("#three-bed-avail").hide();

  document.getElementById("all-btn").disabled = false;
  document.getElementById("one-bed-btn").disabled = true;
  document.getElementById("two-bed-btn").disabled = false;
  document.getElementById("three-bed-btn").disabled = false;
});

$("#two-bed-btn").click(function() {
  $("#all-btn").removeClass("avail-btn-active");
  $("#one-bed-btn").removeClass("avail-btn-active");
  $("#two-bed-btn").toggleClass("avail-btn-active");
  $("#three-bed-btn").removeClass("avail-btn-active");

  $("#one-bed-avail").hide();
  $("#two-bed-avail").show();
  $("#three-bed-avail").hide();

  document.getElementById("all-btn").disabled = false;
  document.getElementById("one-bed-btn").disabled = false;
  document.getElementById("two-bed-btn").disabled = true;
  document.getElementById("three-bed-btn").disabled = false;
});

$("#three-bed-btn").click(function() {
  $("#all-btn").removeClass("avail-btn-active");
  $("#one-bed-btn").removeClass("avail-btn-active");
  $("#two-bed-btn").removeClass("avail-btn-active");
  $("#three-bed-btn").toggleClass("avail-btn-active");

  $("#one-bed-avail").hide();
  $("#two-bed-avail").hide();
  $("#three-bed-avail").show();

  document.getElementById("all-btn").disabled = false;
  document.getElementById("one-bed-btn").disabled = false;
  document.getElementById("two-bed-btn").disabled = false;
  document.getElementById("three-bed-btn").disabled = true;
});

// $("#one-bed-btn").click(showOneBeds());
// $("#two-bed-btn").click(showTwoBeds());
// $("#three-bed-btn").click(showThreeBeds());
//
// function showOneBeds () {
//   $("#one-bed-btn").toggleClass("avail-btn-active");
//   $("#two-bed-btn").removeClass("avail-btn-active");
//   $("#three-bed-btn").removeClass("avail-btn-active");
//
//   $("#one-bed-avail").show();
//   $("#two-bed-avail").hide();
//   $("#three-bed-avail").hide();
//
//   document.getElementById("one-bed-btn").disabled = true;
//   document.getElementById("two-bed-btn").disabled = false;
//   document.getElementById("three-bed-btn").disabled = false;
// }
//
// function showTwoBeds () {
//   $("#one-bed-btn").removeClass("avail-btn-active");
//   $("#two-bed-btn").toggleClass("avail-btn-active");
//   $("#three-bed-btn").removeClass("avail-btn-active");
//
//   $("#one-bed-avail").hide();
//   $("#two-bed-avail").show();
//   $("#three-bed-avail").hide();
//
//   document.getElementById("one-bed-btn").disabled = false;
//   document.getElementById("two-bed-btn").disabled = true;
//   document.getElementById("three-bed-btn").disabled = false;
// }
//
// function showThreeBeds () {
//   $("#one-bed-btn").removeClass("avail-btn-active");
//   $("#two-bed-btn").removeClass("avail-btn-active");
//   $("#three-bed-btn").toggleClass("avail-btn-active");
//
//   $("#one-bed-avail").hide();
//   $("#two-bed-avail").hide();
//   $("#three-bed-avail").show();
//
//   document.getElementById("one-bed-btn").disabled = false;
//   document.getElementById("two-bed-btn").disabled = false;
//   document.getElementById("three-bed-btn").disabled = true;
// }
