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

//-----------2---------------------------

$("#type-2-flr-plan-btn").click(function() {
  $("#type-2-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-2-3d-model-btn").removeClass("avail-btn-active");
  $("#type-2-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-2-flr-plan").show();
  $("#type-2-3d-model").hide();
  $("#type-2-virt-tour").hide();

  document.getElementById("type-2-flr-plan-btn").disabled = true;
  document.getElementById("type-2-3d-model-btn").disabled = false;
  document.getElementById("type-2-virt-tour-btn").disabled = false;
});

$("#type-2-3d-model-btn").click(function() {
  $("#type-2-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-2-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-2-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-2-flr-plan").hide();
  $("#type-2-3d-model").show();
  $("#type-2-virt-tour").hide();

  document.getElementById("type-2-flr-plan-btn").disabled = false;
  document.getElementById("type-2-3d-model-btn").disabled = true;
  document.getElementById("type-2-virt-tour-btn").disabled = false;
});

$("#type-2-virt-tour-btn").click(function() {
  $("#type-2-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-2-3d-model-btn").removeClass("avail-btn-active");
  $("#type-2-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-2-flr-plan").hide();
  $("#type-2-3d-model").hide();
  $("#type-2-virt-tour").show();

  document.getElementById("type-2-flr-plan-btn").disabled = false;
  document.getElementById("type-2-3d-model-btn").disabled = false;
  document.getElementById("type-2-virt-tour-btn").disabled = true;
});

//-------------------------------3------------------------------

$("#type-3-flr-plan-btn").click(function() {
  $("#type-3-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-3-3d-model-btn").removeClass("avail-btn-active");
  $("#type-3-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-3-flr-plan").show();
  $("#type-3-3d-model").hide();
  $("#type-3-virt-tour").hide();

  document.getElementById("type-3-flr-plan-btn").disabled = true;
  document.getElementById("type-3-3d-model-btn").disabled = false;
  document.getElementById("type-3-virt-tour-btn").disabled = false;
});

$("#type-3-3d-model-btn").click(function() {
  $("#type-3-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-3-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-3-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-3-flr-plan").hide();
  $("#type-3-3d-model").show();
  $("#type-3-virt-tour").hide();

  document.getElementById("type-3-flr-plan-btn").disabled = false;
  document.getElementById("type-3-3d-model-btn").disabled = true;
  document.getElementById("type-3-virt-tour-btn").disabled = false;
});

$("#type-3-virt-tour-btn").click(function() {
  $("#type-3-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-3-3d-model-btn").removeClass("avail-btn-active");
  $("#type-3-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-3-flr-plan").hide();
  $("#type-3-3d-model").hide();
  $("#type-3-virt-tour").show();

  document.getElementById("type-3-flr-plan-btn").disabled = false;
  document.getElementById("type-3-3d-model-btn").disabled = false;
  document.getElementById("type-3-virt-tour-btn").disabled = true;
});

//---------------------4------------------------------------------

$("#type-4-flr-plan-btn").click(function() {
  $("#type-4-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-4-3d-model-btn").removeClass("avail-btn-active");
  $("#type-4-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-4-flr-plan").show();
  $("#type-4-3d-model").hide();
  $("#type-4-virt-tour").hide();

  document.getElementById("type-4-flr-plan-btn").disabled = true;
  document.getElementById("type-4-3d-model-btn").disabled = false;
  document.getElementById("type-4-virt-tour-btn").disabled = false;
});

$("#type-4-3d-model-btn").click(function() {
  $("#type-4-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-4-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-4-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-4-flr-plan").hide();
  $("#type-4-3d-model").show();
  $("#type-4-virt-tour").hide();

  document.getElementById("type-4-flr-plan-btn").disabled = false;
  document.getElementById("type-4-3d-model-btn").disabled = true;
  document.getElementById("type-4-virt-tour-btn").disabled = false;
});

$("#type-4-virt-tour-btn").click(function() {
  $("#type-4-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-4-3d-model-btn").removeClass("avail-btn-active");
  $("#type-4-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-4-flr-plan").hide();
  $("#type-4-3d-model").hide();
  $("#type-4-virt-tour").show();

  document.getElementById("type-4-flr-plan-btn").disabled = false;
  document.getElementById("type-4-3d-model-btn").disabled = false;
  document.getElementById("type-4-virt-tour-btn").disabled = true;
});

//------------------------5--------------------------------------

$("#type-5-flr-plan-btn").click(function() {
  $("#type-5-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-5-3d-model-btn").removeClass("avail-btn-active");
  $("#type-5-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-5-flr-plan").show();
  $("#type-5-3d-model").hide();
  $("#type-5-virt-tour").hide();

  document.getElementById("type-5-flr-plan-btn").disabled = true;
  document.getElementById("type-5-3d-model-btn").disabled = false;
  document.getElementById("type-5-virt-tour-btn").disabled = false;
});

$("#type-5-3d-model-btn").click(function() {
  $("#type-5-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-5-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-5-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-5-flr-plan").hide();
  $("#type-5-3d-model").show();
  $("#type-5-virt-tour").hide();

  document.getElementById("type-5-flr-plan-btn").disabled = false;
  document.getElementById("type-5-3d-model-btn").disabled = true;
  document.getElementById("type-5-virt-tour-btn").disabled = false;
});

$("#type-5-virt-tour-btn").click(function() {
  $("#type-5-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-5-3d-model-btn").removeClass("avail-btn-active");
  $("#type-5-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-5-flr-plan").hide();
  $("#type-5-3d-model").hide();
  $("#type-5-virt-tour").show();

  document.getElementById("type-5-flr-plan-btn").disabled = false;
  document.getElementById("type-5-3d-model-btn").disabled = false;
  document.getElementById("type-5-virt-tour-btn").disabled = true;
});

//----------------------------6--------------------------------------

$("#type-6-flr-plan-btn").click(function() {
  $("#type-6-flr-plan-btn").toggleClass("avail-btn-active");
  $("#type-6-3d-model-btn").removeClass("avail-btn-active");
  $("#type-6-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-6-flr-plan").show();
  $("#type-6-3d-model").hide();
  $("#type-6-virt-tour").hide();

  document.getElementById("type-6-flr-plan-btn").disabled = true;
  document.getElementById("type-6-3d-model-btn").disabled = false;
  document.getElementById("type-6-virt-tour-btn").disabled = false;
});

$("#type-6-3d-model-btn").click(function() {
  $("#type-6-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-6-3d-model-btn").toggleClass("avail-btn-active");
  $("#type-6-virt-tour-btn").removeClass("avail-btn-active");

  $("#type-6-flr-plan").hide();
  $("#type-6-3d-model").show();
  $("#type-6-virt-tour").hide();

  document.getElementById("type-6-flr-plan-btn").disabled = false;
  document.getElementById("type-6-3d-model-btn").disabled = true;
  document.getElementById("type-6-virt-tour-btn").disabled = false;
});

$("#type-6-virt-tour-btn").click(function() {
  $("#type-6-flr-plan-btn").removeClass("avail-btn-active");
  $("#type-6-3d-model-btn").removeClass("avail-btn-active");
  $("#type-6-virt-tour-btn").toggleClass("avail-btn-active");

  $("#type-6-flr-plan").hide();
  $("#type-6-3d-model").hide();
  $("#type-6-virt-tour").show();

  document.getElementById("type-6-flr-plan-btn").disabled = false;
  document.getElementById("type-6-3d-model-btn").disabled = false;
  document.getElementById("type-6-virt-tour-btn").disabled = true;
});
