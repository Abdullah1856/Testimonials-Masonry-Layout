// $(document).ready(function () {
//   $(".column").isotope({
//     itemSelector: ".single-boxes",
//     resize: true
//   });
// });

$(window).on("load", function () {
  $(".column").isotope({
    itemSelector: ".single-boxes",
    resize: true
  });
});
