 /*======================================== Vannila JS ========================================*/
 
 
 /*==================== Смена фона HEADER ====================*/
 function scrollHeader(){
    const header = document.getElementById('navbar')
    console.log
        // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*==================== Слайдер Swiper ====================*/

    // Инициализация Swiper после загрузки страницы
    document.addEventListener("DOMContentLoaded", function() {
        new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 32,
            coverflowEffect: {
                rotate: 0,
            },
        });
    });

    /*==================== Видео ====================*/
    const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

    function playPause(){ 
        if (videoFile.paused){
            // запускае видео
            videoFile.play()
            // меняем иконку
            videoIcon.classList.add('ri-pause-line')
            videoIcon.classList.remove('ri-play-line')
        }
        else {
            // на паузу видео
            videoFile.pause(); 
            // меняем иконку
            videoIcon.classList.remove('ri-pause-line')
            videoIcon.classList.add('ri-play-line')

        }
    }
    videoButton.addEventListener('click', playPause)

    function finalVideo(){
        // видео закончилось
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
    // конец, когда видео закончилось
    videoFile.addEventListener('ended', finalVideo)



    
 /*======================================== jQuery JS ========================================*/


 /*==================== Плавная прокрутка по разделам навигации ====================*/

$(document).ready(function() {
  $("a.nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


/*==================== Добавление всплывающих подсказок для социальных сетей ====================*/

$(document).ready(function() {
    $(".home__social-link").hover(function() {
      var socialText = $(this).attr("data-social"); // для всех иконок добавляется текст с атрибутом data-social
      $(this).attr("title", socialText);
    }, function() {
      $(this).removeAttr("title");
    });
  });


  /*==================== Смена картинок при наведении ====================*/

$(document).ready(function() {
  // Когда наводим мышь на первое изображение
  $("#about .about__img-one").hover(function() {
    $(this).attr("src", "assets/img/about1-hover.jpg"); ю
  }, function() {
    $(this).attr("src", "assets/img/about1.jpg"); 
  });

  // Когда наводим мышь на второе изображение
  $("#about .about__img-two").hover(function() {
    $(this).attr("src", "assets/img/about2-hover.jpg"); 
  }, function() {
    $(this).attr("src", "assets/img/about2.jpg"); 
  });
});

