$(function () {
  $(".carousel").carousel({ interval: 5000 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });

 function makeHover() {
   $(".card-text").css("color", "yellow");
 }

 function makeHoverOut() {
  $(".card-text").css("color", "white");
}

  $(".card-text").on("mouseover", makeHover);
  $(".card-text").on("mouseout", makeHoverOut);

  $(function() {
    $("#pushDelivery").click(function(){
      $("#reserveDelivery").modal("show"); 
    });  
  }); 
  
});
