(function ($) {
	"use strict";

    jQuery(document).ready(function($){
			
			$(".anb-inner").each((function() {
          var t = $(this)
            , e = t.find("li")
            , n = e.length
            , i = t.data("slide-speed");
          e.first().addClass("is-visible"),
          setInterval((function() {
              var i = t.find(".is-visible").index();
              t.find(".is-visible").removeClass("is-visible").addClass("is-finished").next().addClass("is-visible"),
              setTimeout((function() {
                  t.find(".is-finished").removeClass("is-finished").addClass("is-hidden")
              }
              ), 600),
              setTimeout((function() {
                  t.find(".is-hidden").removeClass("is-hidden")
              }
              ), 1200),
              i === n - 1 && e.first().addClass("is-visible")
          }
          ), i)
        }
      ));
    });

    jQuery(window).on("load", function(){

    });

}(jQuery));
