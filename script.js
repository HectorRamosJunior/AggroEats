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
  $cricket.show();
};