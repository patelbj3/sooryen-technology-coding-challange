$(function() {

var $template = $(".template");

var hash = 5;
$(".btn-add-panel").on("click", function () {
    var $newPanel = $template.clone();
    $newPanel.find(".collapse");
    $newPanel.find(".accordion-toggle").attr("href",  "#" + (++hash))
             .text("Section" + hash);
    $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse");
    $("#accordion").append($newPanel.fadeIn());
});
function closeWin() {
  myWindow.close();
}






var acc = document.getElementsByClassName("accordiontest");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).on('click', '.glyphicon-remove-circle', function () {
    $(this).parents('.panel').get(0).remove();
});

});