var preLoader = document.getElementById("pageloader");
window.addEventListener("load" , function(){
    preLoader.style.display="none";
})


// header-top

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});


$(".sliderme").slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll:3,
    arrows: true, 
    autoplay:false,
    autoplaySpeed:4000,
    dots:true,
    responsive: [
        {
            breakpoint: 1044,
            settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        }
    ]
})



$('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');
    if (e.type === 'mouseenter')_d.addClass('show');
    setTimeout(function(){
      _d.toggleClass('show', _d.is(':hover'));
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },300);
  });



  const main = () => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
        
  
    const EVENTDATE = new Date('June 1, 2025, 19:00:00')
   
    const countDown = new Date(EVENTDATE).getTime()
    const x = setInterval(() => {
  
          const now = new Date().getTime()
          const distance = countDown - now
  
          document.getElementById("days").innerText = Math.floor(distance / day)
          document.getElementById("hours").innerText = Math.floor((distance % day) / (hour))
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / (minute))
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second)
  
        
        }, 0)
    }
  
  main();