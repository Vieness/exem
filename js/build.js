$(function () {
    console.log('ham');
    $('._hamburger').click(function () {
        $('._nav').slideToggle();
    });
});
$('.slider').slick({
    dots : false,
    slidesToShow :1,
    arrows:true,
prevArrow:$(".prev"),
nextArrow:$(".next"),
    responsive: [

      {
        breakpoint: 400,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
     prevArrow:$(".prev"),
nextArrow:$(".next"),
         
        }
      }
    ]
  });


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZHVsZTEuanMiLCJtb2R1bGUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGFtJyk7XHJcbiAgICAkKCcuX2hhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuX25hdicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxufSk7IiwiJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICAgIGRvdHMgOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdyA6MSxcclxuICAgIGFycm93czp0cnVlLFxyXG5wcmV2QXJyb3c6JChcIi5wcmV2XCIpLFxyXG5uZXh0QXJyb3c6JChcIi5uZXh0XCIpLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG5cclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGFycm93czpmYWxzZSxcclxuICAgICBwcmV2QXJyb3c6JChcIi5wcmV2XCIpLFxyXG5uZXh0QXJyb3c6JChcIi5uZXh0XCIpLFxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9KTtcclxuIiwiIl19
