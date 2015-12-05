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