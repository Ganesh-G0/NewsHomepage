$(document).ready(() => {
  $(".toggle-btn").click(() => {
    $(".menu-links").toggleClass("d-none");
    $(".menu-links").toggleClass("open");
    $(".close-icon").toggleClass("d-none");    
    $(".hamburger-icon").toggleClass("d-none");
  })
});
