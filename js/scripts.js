$(document).ready(function() {

var elements = ["h1", "p", "img"];
//
elements.forEach(function(element) {
  $(element).click(function() {
    alert(element);
  });
});
});
