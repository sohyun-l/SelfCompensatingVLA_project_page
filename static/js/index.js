$(document).ready(function() {
  // Toggle the navbar burger menu on mobile.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
