
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