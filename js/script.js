
//alert("js connecté");
//

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#FF8D1B",
     	  "color" : "white"
    }
  },
  "theme": "classic",
  "content": {
    "message": "Ce site utilise des cookies. ",
    "dismiss": "Je suis d'accord",
    "link": "Lire plus &gt;",
    "href": "index.html"
  }
})});


$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});


$(".more").hide();
jQuery('.button-read-more').click(function () {
$(this).closest('.less').addClass('active');
$(this).closest(".less").prev().stop(true).slideDown("1000");
});
jQuery('.button-read-less').click(function () {
$(this).closest('.less').removeClass('active');
$(this).closest(".less").prev().stop(true).slideUp("1000");