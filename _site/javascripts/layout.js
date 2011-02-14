// $(function() {
  // $("#tripit-badge *").removeAttr("style");
  // $("#tripit-badge img").replaceWith("Tripit - ");
// });
$(function() {
  Galleria.loadTheme('/javascripts/galleria/theme/galleria.dots.js');
  $('.images').galleria();
});
$(function() {
  var contact = $("#contact"),
    info = contact.find("#contact-info"),
    button = contact.find("#contact-btn");

  button.click(function(){
    info.slideToggle();
  });
});
$(function(){

  // Accordion
  $("#accordion").accordion({ autoHeight: false, header: "h3" });
  
  //hover states on the static widgets
  $('#dialog_link, ul#icons li').hover(
    function() { $(this).addClass('ui-state-hover'); }, 
    function() { $(this).removeClass('ui-state-hover'); }
  );
  
});