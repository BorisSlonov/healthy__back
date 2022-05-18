const slider = () => {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,

        },



        // And if we need scroll
    });
    try {
        swiper.pagination.bullets.forEach((item) => {
            if (swiper.pagination.bullets[0] == item) {
                item.style.marginLeft = '0px';
            } else {
                item.style.marginLeft = '8px';

            }


        });

    } catch (error) {

    }

    try {
        const aboutSlider = new Swiper(".articles__slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        const swiperPrev = document.querySelector('.articles__prev-button');
        const swiperNext = document.querySelector('.articles__next-button');

        swiperPrev.addEventListener('click', () => {
            aboutSlider.slidePrev();
        });
        swiperNext.addEventListener('click', () => {
            aboutSlider.slideNext();
        });




    } catch (error) {

    }



};

export default slider;



