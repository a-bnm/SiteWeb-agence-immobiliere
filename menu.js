$(".description").ready(function(){
    $(".description").animate({"left":"65%"},3000);
});

$(".btnParcours").ready(function(){
    $(".btnParcours").animate({"left":"75%"},3000);
});

$(function(){
    $(".btn").click(function(){
        $("#Menu").slideToggle(500);
    });
});

