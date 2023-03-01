$(function () {
    var mainSliderOptions = {};
    if ($(".mainSlider .swiper-slide").length) {
        mainSliderOptions = {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 0,
            // centeredSlides: true,
            speed: 600,
            autoplay: {
                delay: 15000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".mainSlider__next",
                prevEl: ".mainSlider__prev",
            },
            keyboard: true,
            watchOverflow: true,
            pagination: {
                el: ".mainSlider__pag",
                type: "bullets",
                dynamicBullets: true,
                clickable: true,
            }
        };
    }
    var swiper = new Swiper(".mainSlider", mainSliderOptions);
})