
    $(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() >10 ) { 
          $("#header ").css("top", "0px"); 
          $("#topbar ").css("top", "-40px"); 
        } else  { 
            $("#header").css("top", "40px"); 
            $("#topbar ").css("top", "0px"); 
        } 
      });
    });

    AOS.init({
        duration: 600,
        delay: 100,
    });

    var $filters = $('.fillter-gal [data-filter]'),
    $boxes = $('.filte-content [data-category]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-category = "' + $filterColor + '"]')
            .addClass('is-animated').fadeIn();
        });
    }



});


$('.testimonail-car').slick({
  dots: true,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});