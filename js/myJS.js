$(document).ready(function () {

    $(".start").css({"background-color":"transparent"})

    $('.carousel').carousel({
        interval:3000,
        cycle:true
    })
    var deltaI = 0
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    $('.wholeContent').bind(mousewheelevt, function(e){

        var evt = window.event || e //equalize event object
        evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
        var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
        deltaI += delta
        console.log("delta--> ",deltaI)
        console.log("windows.scrollTop-> ",$(window).scrollTop())
        if($(window).scrollTop()<150) {
            //scroll up
            $('.start').css({"position":"absolute","background-color":"transparent"});
            console.log("scroll up - scrollTop-> ",$(window).scrollTop())
        }
        else if(delta < 0){
            //scroll down
            $(".start").css({"position":"fixed","background-color":"#4b4c51"});
            console.log("scroll down-> ",delta)
        }
    });
})