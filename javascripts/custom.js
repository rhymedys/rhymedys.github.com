/*
 *
 * Created by Rhymedys
 */


jQuery(function ($) {
    "use strict";

    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //Opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果/谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //iOS终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //Android终端或者UC浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否Web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        //window.location="http://localhost/index.html";
        //window.location="http://localhost/demo.php";
        $('.navigation').singlePageNav();
        $.noConflict();
        $('.nav a').on('click', function () {});
    }
    else if (browser.versions.android) {
        //window.location="http://localhost/demo.php";
        $('.navigation').singlePageNav();
        $.noConflict();
        $('.nav a').on('click', function () {});
    } else {
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
