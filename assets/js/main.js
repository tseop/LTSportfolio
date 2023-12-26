$(function (){

    // mobile screensize
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    // gnb position
    $(window).scroll(function () {
        fixedScr();
    });
    function fixedScr() {
        var fixTab = $('.gnb'),
            fixCont = $('.container-wrapper > .main-section');
        if (fixTab.length > 0) {
            var scrPos = $(window).scrollTop();
            var scrNum1 = fixCont.eq(0).offset(),
                scrNum2 = fixCont.eq(1).offset(),
                scrNum3 = fixCont.eq(2).offset(),
                scrNum4 = fixCont.eq(3).offset();
            if (scrPos > scrNum1.top - 71 && scrPos < scrNum2.top - 71) {
                fixTab.find('li').eq(0).addClass('active').siblings().removeClass('active');
            } else if (scrPos > scrNum2.top - 71 && scrPos < scrNum3.top - 71) {
                fixTab.find('li').eq(1).addClass('active').siblings().removeClass('active');
            } else if (scrPos > scrNum3.top - 71 && scrPos < scrNum4.top - 71) {
                fixTab.find('li').eq(2).addClass('active').siblings().removeClass('active');
            } else if (scrPos > scrNum4.top - 71) {
                fixTab.find('li').eq(3).addClass('active').siblings().removeClass('active');
            }
        }
    }
    $('.gnb .gnb-list .gnb-item ').click(function () {
        var scrIdx = $(this).index(),
            scrOffset = $('.container-wrapper > .main-section').eq(scrIdx).offset();
        $('html, body').stop().animate({ scrollTop: scrOffset.top - 70}, 300);
        setTimeout(function () {
            $(this).addClass('active').siblings().removeClass('active');
        }, 300);
    });

    // project-swiper
    function setprojSwiper() {
        // info-swiper
        var swiperInfo = new Swiper('.work-info-wrap .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: {
                el: ".swiper-control-area .swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-control-area .swiper-button-next",
                prevEl: ".swiper-control-area .swiper-button-prev",
            },
            loop:true,
            allowTouchMove: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction : false,
            },
            speed: 500,
            effect : 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
        //img-swiper
        var swiperImg = new Swiper('.work-img-wrap .swiper-container', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 0,
            pagination: {
                el: ".swiper-control-area .swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-control-area .swiper-button-next",
                prevEl: ".swiper-control-area .swiper-button-prev",
            },
            loop:true,
            allowTouchMove: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction : false,
            },
            speed: 500,
        });

        //일시정지
        $(".swiper-control-area .swiper-button-pause").click(function() {
            $(".swiper-control-area .swiper-button-pause").css("display", "none");
            $(".swiper-control-area .swiper-button-play").css("display", "inline-block");
            swiperInfo.autoplay.stop();
            swiperImg.autoplay.stop();
        });
        // 재생
        $(".swiper-control-area .swiper-button-play").click(function() {
            $(".swiper-control-area .swiper-button-play").css("display", "none");
            $(".swiper-control-area .swiper-button-pause").css("display", "inline-block");
            swiperInfo.autoplay.start();
            swiperImg.autoplay.start();
        });
    }
    setprojSwiper();
});