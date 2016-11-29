/*
 *
 * Created by Rhymedys

 1. Fixed header
 2. Site search
 3. Main slideshow
 4. Owl Carousel
 a. Testimonial
 b. Clients
 c. Team
 5. Back to top
 6. Skills
 7. BX slider
 a. Blog Slider
 b. Portfolio item slider
 8. Isotope
 9. Animation (wow)
 10. Flickr

 */


jQuery(function ($) {
    "use strict";

    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad: false
    };

    //检测平台
    var p = navigator.platform;

    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;

    if (system.win || system.mac || system.xll) {
        $('.navigation').singlePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollSpeed: 750,
            offset: 0,
            filter: ':not(.external)',
            easing: 'swing',

        });

        $.noConflict();
        $('.nav a').on('click', function () {
            if ($('.navbar-toggle').css('display') != 'none') {
                $(".navbar-toggle").trigger("click");
            }
        });


// prettyphoto
        $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }


    /* ======= Chart ========= */

    $('.chart').easyPieChart({
        barColor: '#00BCD4',//Pie chart colour
        trackColor: '#e8e8e8',
        scaleColor: false,
        lineWidth: 5,
        animate: 2000,
        onStep: function (from, to, percent) {
            $(this.el).find('span').text(Math.round(percent));
        }
    });


})
;
