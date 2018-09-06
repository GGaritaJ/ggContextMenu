///////////////////////////////////////////////
//  ggContextMenu        JS/CSS PlugIn V1.0  //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-10           //
//  last date:  friday, 2018-09-10           //
///////////////////////////////////////////////

; (function ($) {
    jQuery.fn.ggContextMenu = function () {
        try {
            $(this).each(function () {
                $(this).contextmenu(function (event) {
                    event.preventDefault();
                    var x = event.clientX;
                    var y = event.clientY;
                    var menuId = ("#" + $(event.currentTarget).attr("context-menu"));
                    _ggShowContextMenu(menuId, x, y);
                });
            });
            $("li.sub-level").on("click", function (event) {
                var opts = $(this).find("div.sub-level");
                if (!$(opts).hasClass("active")) {
                    $(opts).addClass("active");
                    $(this).addClass("active");
                } else if (!($(this).find("div").find(event.target).length == 0)){
                    $(opts).addClass("active");
                    $(this).addClass("active");
                } else {
                    $(opts).removeClass("active");
                    $(this).removeClass("active");
                }
            });
            $('html').unbind("click").on('click', function (event) {
                if (($("div.ggContextMenu").find(event.target).length == 0)) {
                    $("div.ggContextMenu").removeClass("active").removeAttr("style");
                    $("div.sub-level, li.sub-level").removeClass("active").removeAttr("style");
                }
            });
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
    function _ggShowContextMenu(menuId, x, y) {
        $("div.ggContextMenu").removeClass("active").removeAttr("style");
        var screenW = $(window).width();
        var screenH = $(window).height();
        var menuW = $(menuId).width();
        var menuH = $(menuId).height();
        var pos1 = "top";
        var pos2 = "left";
        if ((y + menuH) > screenH) {
            y = y - menuH - 18;
            pos1 = "bottom";
        }
        if ((x + menuW) > screenW) {
            x = x - menuW - 18;
            pos2 = "right";
        }
        $(menuId).css(("border-" + pos1 + "-" + pos2 + "-radius"), "0px");
        $(menuId).css("top", (y + "px"));
        $(menuId).css("left", (x + "px"));
        $(menuId).addClass("active");
    };
})(jQuery);
