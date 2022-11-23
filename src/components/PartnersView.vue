<template>
    <section id="partners" class="l-partners">
        <div class="container container-1460">
            <header class="c-header text-center">
                <h2 class="c-header__title wow fadeInUp">{{ $t("sc_partners.title") }}</h2>
            </header>
            <div class="c-content wow fadeInUp">

                <!-- Slider main container -->
                <div class="partners__slider">
                    <div class="swiper swiper-container">
                        <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-01.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-02.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-03.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-04.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-05.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-06.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="p-item ef--zoomin">
                                <div class="p-item__thumb">
                                <div class="ratio ratio--contain">
                                    <img src="images/partners-img-07.png" alt="">
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button swiper-button-prev"></div>
                    <div class="swiper-button swiper-button-next"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
// Import Swiper and modules
import Swiper, { Navigation } from 'swiper';

  // Import Swiper styles
  export default {

    mounted() {

        new Swiper('.partners__slider .swiper-container', {
            modules: [Navigation],
            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            // Navigation arrows
            navigation: {
                nextEl: '.partners__slider .swiper-button-next',
                prevEl: '.partners__slider .swiper-button-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                slidesPerView: 2,
                spaceBetween: 12,
                },
                768: {
                slidesPerView: 4,
                },
                1024: {
                slidesPerView: 5,
                },
            },
        });
    }
  };
</script>