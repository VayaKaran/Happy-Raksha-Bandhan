$(document).ready(function(){
    $("#wishButton").click(function(){
        $(".modal").fadeIn();
        $(".close").fadeIn();
    });

    $(".close").click(function(){
        $(".modal").fadeOut();
    });

    $(window).click(function(event){
        if ($(event.target).hasClass("modal")) {
            $(".modal").fadeOut();
        }
    });
});
alert("Happy Raksha Bandhan...");