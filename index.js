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

  // $("#one-bed-avail").show();
  // $("#two-bed-avail").show();
  // $("#three-bed-avail").show();

  $(".one-bed").show();
  $(".two-bed").show();
  $(".three-bed").show();

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

  // $("#one-bed-avail").show();
  // $("#two-bed-avail").hide();
  // $("#three-bed-avail").hide();

  $(".one-bed").show();
  $(".two-bed").hide();
  $(".three-bed").hide();

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

  // $("#one-bed-avail").hide();
  // $("#two-bed-avail").show();
  // $("#three-bed-avail").hide();

  $(".one-bed").hide();
  $(".two-bed").show();
  $(".three-bed").hide();

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

  // $("#one-bed-avail").hide();
  // $("#two-bed-avail").hide();
  // $("#three-bed-avail").show();

  $(".one-bed").hide();
  $(".two-bed").hide();
  $(".three-bed").show();

  document.getElementById("all-btn").disabled = false;
  document.getElementById("one-bed-btn").disabled = false;
  document.getElementById("two-bed-btn").disabled = false;
  document.getElementById("three-bed-btn").disabled = true;
});

$("#type-1-flr-plan-btn").click(function() {
  $("#type-1-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-1-3d-model-btn").removeClass("avail-btn-active");
  $("#type-1-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-1-flr-plan").show();
  $("#type-1-3d-model").hide();
  $("#type-1-virt-tour").hide();

  document.getElementById("type-1-flr-plan-btn").disabled = true;
  document.getElementById("type-1-3d-model-btn").disabled = false;
  document.getElementById("type-1-virt-tour-btn").disabled = false;
});

$("#type-1-3d-model-btn").click(function() {
  $("#type-1-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-1-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-1-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-1-flr-plan").hide();
  $("#type-1-3d-model").show();
  $("#type-1-virt-tour").hide();

  document.getElementById("type-1-flr-plan-btn").disabled = false;
  document.getElementById("type-1-3d-model-btn").disabled = true;
  document.getElementById("type-1-virt-tour-btn").disabled = false;
});

$("#type-1-virt-tour-btn").click(function() {
  $("#type-1-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-1-3d-model-btn").removeClass("avail-btn-active");
  $("#type-1-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-1-flr-plan").hide();
  $("#type-1-3d-model").hide();
  $("#type-1-virt-tour").show();

  document.getElementById("type-1-flr-plan-btn").disabled = false;
  document.getElementById("type-1-3d-model-btn").disabled = false;
  document.getElementById("type-1-virt-tour-btn").disabled = true;
});
