document.addEventListener("DOMContentLoaded", function() {
        
          Handlebars.registerHelper('isdefined', function (value) {
            return value !== undefined;
          });

        $(".animation-button").click(function(){
          console.log('hello');
          $("#first-screen").addClass("slide-out-top");
          $(".animation-section").addClass("slide-in-bottom");

        });
    //   let first = document.getElementById('first-screen');
    //     first.addEventListener('click', function () {
    //         console.log('click');
    //     });

        $(function(){

            window.sr = ScrollReveal();
          
            if ($(window).width() < 768) {
          
                if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                    $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
                }
          
                sr.reveal('.js--fadeInRight', {
                  origin: 'right',
                  distance: '300px',
                  easing: 'ease-in-out',
                  duration: 800,
                });
          
            } else {
                
                sr.reveal('.js--fadeInLeft', {
                  origin: 'left',
                  distance: '300px',
                    easing: 'ease-in-out',
                  duration: 800,
                });
          
                sr.reveal('.js--fadeInRight', {
                  origin: 'right',
                  distance: '300px',
                  easing: 'ease-in-out',
                  duration: 800,
                });
          
            }
            
            sr.reveal('.js--fadeInLeft', {
                  origin: 'left',
                  distance: '300px',
                    easing: 'ease-in-out',
                  duration: 800,
                });
          
                sr.reveal('.js--fadeInRight', {
                  origin: 'right',
                  distance: '300px',
                  easing: 'ease-in-out',
                  duration: 800,
                });
          
          
          });
          
});
