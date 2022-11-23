<template>
    <footer id="contact-us" class="l-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center text-md-start">
                    <div class="l-footer__item l-footer__item--logo">
                        <div class="l-footer__logo">
                            <img src="images/logo.svg" alt="">
                        </div>
                        <ul class="p-socical row g-4 justify-content-center justify-content-md-start">
                            <li class="col-auto"><a href="#" target="_blank"><i class="iconz-twitter"></i></a></li>
                            <li class="col-auto"><a href="#" target="_blank"><i class="iconz-facebook"></i></a></li>
                            <li class="col-auto"><a href="#" target="_blank"><i class="iconz-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="l-footer__item l-footer__item--address">
                        <h3 class="l-footer__title">{{ $t("sc_footer.address_title") }}</h3>
                        <ul class="p-address">
                            <li>
                                <i class="iconz-location"></i>
                                <div>
                                    <p>{{ $t("sc_footer.address1") }}</p>
                                    <p>{{ $t("sc_footer.address2") }}</p>
                                </div>
                            </li>
                            <li class="align-items-center">
                                <i class="iconz-mobile"></i>
                                <div>
                                    <p><a href="tel:(+1) 555-0108-000">(+1) 555-0108-000</a> {{ $t("sc_footer.address_or") }} <a href="tel:(+236) 555-0108">(+236) 555-0108</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="l-footer__item l-footer__item--subscribe">
                        <h3 class="l-footer__title">{{ $t("sc_footer.subscribe_title") }}</h3>
                        <p class="mb-3">{{ $t("sc_footer.subscribe_des") }}</p>
                        <div class="p-newsletter">
                            <input type="text" class="p-newsletter__input form-control" :placeholder="$t('sc_footer.newsletter_input_placeholder')">
                            <button type="submit" class="btn p-newsletter__submit"><i class="iconz-long-arrow-right -white"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <div class="l-footer__copyright text-center">
        <div class="container">
            <p>2017 Copyright. Policy.</p>
        </div>
    </div>
    <div class="back-to-top"><i class="iconz-chevron-down"></i></div>

    <nav id="menu__mobile" class="nav__mobile">
        <div class="nav__mobile__header">
            <div class="c-language dropdown -st2">
                <SwitchLanguage />
            </div>

            <div class="ms-auto">
                <a href="#menu__mobile" class="mburger">
                <span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span>
                </a>
            </div>
        </div>
        <ul class="nav__mobile--ul">
            <li class="menu-item"><a href="#about-us">{{ $t("header.aboutUs") }}</a></li>
            <li class="menu-item"><a href="#games">{{ $t("header.games") }}</a></li>
            <li class="menu-item"><a href="#partners">{{ $t("header.partners") }}</a></li>
            <li class="menu-item"><a href="#contact-us">{{ $t("header.contactUs") }}</a></li>
        </ul>
    </nav>
</template>

<script>
import SwitchLanguage from './SwitchLanguage.vue';
export default {
  name: 'FooterView',
  components:{
    SwitchLanguage,
  }
}
</script>