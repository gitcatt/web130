$(document).ready(function(){
  var ww = document.body.clientwidth;
  
  $(".nav li a").each(function(){
    if ( $(this).next().length > 0 ){
     $(this).addClass("parent");   
    }
   });
  
  if (ww < 800) {
    $(".toggleMenu").css("display", "inline-block");
    $(".nav li a").click(function(){
      $(this).parent("li").togggleClass("hover");
   });
  } else {
    $("toggleMenu").css("display", "none");
    $(".nav li").hover(function(){
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    });
  }

});