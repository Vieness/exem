console.log('start module 3 logic');

$(document).ready(function(){
  $('.btn-portfolio').click(function(){
    var value = $(this).attr("data-filter");
    if (value == "all")
    {
      $(".filter").show("1000");
    }
    else
    {
      $(".filter").not("."+value).hide("1000");
      $(".filter").filter("."+value).show("1000");
    }
  })
})