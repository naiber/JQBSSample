$(document).ready(function () {


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
        if(delta > 0) {
            //scroll up
            console.log("scroll up")
        }
        else{
            //scroll down
            $(".myNav").css({"position":"fixed","background-color":"#4b4c51"});
            console.log("scroll down")
        }
    });
})