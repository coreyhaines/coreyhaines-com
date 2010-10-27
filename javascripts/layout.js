$(function() {
  $("#tripit-badge *").removeAttr("style");
  $("#tripit-badge img").replaceWith("Tripit - ");
});
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
$(function() {
  new TWTR.Widget({
    version: 2,
    type: 'profile',
    rpp: 3,
    interval: 6000,
    width: 274,
    height: 'auto',
    theme: {
      shell: {
        background: '#312118',
        color: '#b16d2a'
      },
      tweets: {
        background: '#312118',
        color: '#b16d2a',
        links: '#e68e36'
      }
    },
    features: {
      scrollbar: false,
      loop: false,
      live: true,
      hashtags: true,
      timestamp: true,
      avatars: false,
      behavior: 'all'
    }
  }).render().setUser('coreyhaines').start();
});
