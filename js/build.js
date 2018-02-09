$(function () {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});
console.log('start module 1 logic');

console.log('start module 2 logic');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZHVsZTEuanMiLCJtb2R1bGUyLmpzIiwibW9kdWxlMy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FDREE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGFtJyk7XHJcbiAgICAkKCcuX2hhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuX25hdicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxufSk7IiwiY29uc29sZS5sb2coJ3N0YXJ0IG1vZHVsZSAxIGxvZ2ljJyk7XHJcbiIsImNvbnNvbGUubG9nKCdzdGFydCBtb2R1bGUgMiBsb2dpYycpO1xyXG4iLCJjb25zb2xlLmxvZygnc3RhcnQgbW9kdWxlIDMgbG9naWMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmJ0bi1wb3J0Zm9saW8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgdmFyIHZhbHVlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICBpZiAodmFsdWUgPT0gXCJhbGxcIilcclxuICAgIHtcclxuICAgICAgJChcIi5maWx0ZXJcIikuc2hvdyhcIjEwMDBcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICQoXCIuZmlsdGVyXCIpLm5vdChcIi5cIit2YWx1ZSkuaGlkZShcIjEwMDBcIik7XHJcbiAgICAgICQoXCIuZmlsdGVyXCIpLmZpbHRlcihcIi5cIit2YWx1ZSkuc2hvdyhcIjEwMDBcIik7XHJcbiAgICB9XHJcbiAgfSlcclxufSkiXX0=
