// JavaScript source code
$(document).ready(function () {
    var docTitle = document.title;

    if (docTitle == "Huskies Computer Club") {//Home Page 
        $("#scrollButton").click(function () {
            $("html, body").animate({ scrollTop: "+=700px" }, 700);
        });
        $(".IOT").mouseover(function () {
            $(".IOT h3").fadeIn(500);
            $(".IOT p").fadeIn(500);
        });
        $(".IOT").mouseout(function () {
            $(".IOT h3").fadeOut(500);
            $(".IOT p").fadeOut(500);
        });
        $(".Geocache ").mouseover(function () {
            $(".Geocache h3").fadeIn(500);
            $(".Geocache p").fadeIn(500);
        });
        $(".Geocache").mouseout(function () {
            $(".Geocache h3").fadeOut(500);
            $(".Geocache p").fadeOut(500);
        });
        $(".Software").mouseover(function () {
            $(".Software h3").fadeIn(500);
            $(".Software p").fadeIn(500);
        });
        $(".Software").mouseout(function () {
            $(".Software p").fadeOut(500);
            $(".Software h3").fadeOut(500);
        });
        $(".Header").mouseover(function () {
            $(this).css("background-image", "url(place.png)");
            $(this).css("background-size", "cover");
        });

        $(".Header").mouseout(function () {
            $(this).css("background-image", "url(img/black.jpg)");
        });
    }
    else if (docTitle == "Projects") {
        $(".Header").mouseout(function () {
            $(this).css("background-image", "url(img/IOT1.jpg)");
            $(this).css("background-size", "cover");
        });
        $(".Header").mouseover(function () {
            $(this).css("background-image", "url(img/Geo1.jpg)");
        });
        $(".ProjectSec ").mouseover(function () {
            $(this).css("height", "auto");
            //$(this).animate({
            //    height: 420
            //}, 1000);
        });
        $(".ProjectSec").mouseout(function () {
            $(this).css("height", "420px");
        });
    }
    else if (docTitle == "Events") {
        $(".Header").mouseout(function () {
            $(this).css("background-image", "url(place.png)");
            $(this).css("background-size", "cover");
        });
        $(".Header").mouseover(function () {
            $(this).css("background-image", "url(img/black.jpg)");
        });
    }
});