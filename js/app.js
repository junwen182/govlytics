// Slide-out Filters
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

// jQuery UI datepicker
$(function() {
  $( "#start-date" ).datepicker();
  $( "#end-date" ).datepicker();
});

// Extended Department/Agency Filters
$(".all-agencies").click(function(e) {
  e.preventDefault();
  if ( !$(".filter-agency").hasClass("extended-filter-appear") ) {
    $(".filter-agency").toggleClass("extended-filter-appear");
  }
});
$(".all-offices").click(function(e) {
  e.preventDefault();
  if ( !$(".filter-office").hasClass("extended-filter-appear") ) {
    $(".filter-office").toggleClass("extended-filter-appear");
  }
});
$(".close-box").click(function(e) {
  e.preventDefault();
  $(this).closest(".extended-filter").toggleClass("extended-filter-appear");
});

// Prevent "Managing Columns" drop-down menu from closing when clicked anywhere besides the header
$(".table-options-show-columns .dropdown-menu").click(function (e)
{
    e.stopPropagation();
});

// Slider picker
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ]
  });
});

$(function() {
  $( "#slider" ).slider();
});