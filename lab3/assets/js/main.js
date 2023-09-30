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