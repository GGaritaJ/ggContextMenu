///////////////////////////////////////////////
// ggContextMenu        JS/CSS PlugIn V1.0   //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-10           //
//  last date:  friday, 2018-09-10           //
///////////////////////////////////////////////

; (function ($) {
    var classExpandable;
    jQuery.fn.ggExpandable = function (options) {
        try {
            $(this).each(function () {
                
            });
            if ((options != undefined) && (options !== null) && (options !== "")) {
                if (options.hasOwnProperty('startAt')) {
                    
                }
            }
            _ggAddBasicEvents();
            console.log("gg:context menu ready!");
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
        finally {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        }
    };
    function _ggAddBasicEvents() {
        $('html').unbind("click").on('click', function (event) {
            var obj = $(event.target);
            if (($(obj).hasClass("ggContextMenu"))) {
                
            }
            $("div.ggContextMenu").each(function () {
                $(this).removeClass("active");
            });
        });
    };
})(jQuery);
