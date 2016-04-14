/* Hector Ramos */
/* August 24, 2015 */

$(document).ready(function() {
  var $body = $("body");
  
  $body.append("<div id='aggro'><span id='score'></span></div>");
  $body.append("<div id='cricket'></div>");

  var $cricket = $("#cricket");
  var $aggro = $("#aggro");
  var $score = $("#score")
  var score = 0;

  $cricket.click(function() {
    move_cricket($cricket);

    score++;
    $score.html("<b>Score: " + score + "</b>");
  });

});


function move_cricket($cricket) {
  $cricket.hide();

  var left = 0;
  var bottom = 0;

  // Make sure the cricket doesn't overlap with aggro
  while (left < 15 && bottom < 15) {
    left = Math.floor(Math.random() * (90 + 1));
    bottom = Math.floor(Math.random() * (90 + 1));
  }

  $cricket.css({bottom: bottom + "%", left: left + "%"});

  $cricket.show();
};