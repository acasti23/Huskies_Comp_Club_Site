// JavaScript source code
$(document).ready(function () {
    var docTitle = document.title;
    $("#scrollButton").click(function () {
        $("html, body").animate({ scrollTop: "+=500px" }, 500);
    });
    
    if (docTitle == "Huskies Computer Club") {//Home Page 
        
        $(".IOT img").mouseover(function () {

            $(".IOT h3").fadeIn(500);
            $(".IOT p").fadeIn(500);
        });
        $(".IOT img").mouseout(function () {
            $(".IOT h3").fadeOut(500);
            $(".IOT p").fadeOut(500);
        });
        $(".Geocache img").mouseover(function () {
            $(".Geocache h3").fadeIn(500);
            $(".Geocache p").fadeIn(500);
        });
        $(".Geocache img").mouseout(function () {
            $(".Geocache h3").fadeOut(500);
            $(".Geocache p").fadeOut(500);
        });
        $(".Software img").mouseover(function () {
            $(".Software h3").fadeIn(500);
            $(".Software p").fadeIn(500);
        });
        $(".Software img").mouseout(function () {
            $(".Software p").fadeOut(500);
            $(".Software h3").fadeOut(500);
        });
        $(".Header").mouseover(function () {
            $(this).css("background-image", "url(img/Geo1.jpg)");
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
        });
        $(".ProjectSec").mouseout(function () {
            $(this).css("height", "420px");
        });
    }
    else if (docTitle == "Events") {
        $(".Header").mouseout(function () {
            $(this).css("background-image", "url(img/IOT2.jpg)");
            $(this).css("background-size", "cover");
        });
        $(".Header").mouseover(function () {
            $(this).css("background-image", "url(img/black.jpg)");
        });
    }
});