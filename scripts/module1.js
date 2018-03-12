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
