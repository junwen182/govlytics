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

// Blue highlight on filter options

  // function that calls on an event: when a filter category is toggled open
    // scan all the filter categories
      // if it doesn't have the class ___ (i.e. its active)
        // change its css: remove display: none on the blue highlight


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

