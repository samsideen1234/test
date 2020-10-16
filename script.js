

$(document).ready(function(){

    $(window).on('load', function () {

      $("#needtoslidedown").slideDown(4000, function(){

alert("Hi! Thanks For Visiting My Website,Click Ok To Continue Navigating.");

      });



 });

$("h2").click(function(){

$("ul li").slideToggle(1000);

})

})
