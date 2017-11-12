'use strict';

var velocity = 0.5;

function update(){
var pos = $(window).scrollTop();
$('.imageDiv1').each(function() {
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height();
    $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px');
   });
   };

 $(window).bind('scroll', update);
