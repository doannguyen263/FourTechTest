<template>
<section class="l-banner">
        <div class="c-content"  style="background: url( images/banner-bg.png ) center center / 100% 100% no-repeat">
            <div class="container position-relative">
                
                <h2 class="l-banner__title text-center wow fadeInUp" v-html="$t('sc_banner.title')"></h2>
                
                <vue-countdown :time="31 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                    <div class="l-banner__countdown d-flex justify-content-between align-items-center mx-auto wow fadeInUp">
                        <div>
                            <p class="-number">{{ days }}</p>
                            <p>{{ $t("sc_banner.days") }}</p>
                        </div>
                        <div class="-dots">:</div>
                        <div>
                            <p class="-number">{{ hours }}</p>
                            <p>{{ $t("sc_banner.hours") }}</p>
                        </div>
                        <div class="-dots">:</div>
                        <div>
                            <p class="-number">{{ minutes }}</p>
                            <p>{{ $t("sc_banner.minutes") }}</p>
                        </div>
                        <div class="-dots">:</div>
                        <div>
                            <p class="-number">{{ seconds }}</p>
                            <p>{{ $t("sc_banner.second") }}</p>
                        </div>
                    </div>
                </vue-countdown>
                

                <div class="l-banner__sendmail mx-auto wow fadeInUp">

                    <div class="l-banner__sendmail__excerpt text-center">{{ $t("sc_banner.sendmail_text") }}</div>
                    <form action="" class="l-banner__sendmail__form">
                        <input type="text" class="form-control" :placeholder="$t('sc_banner.sendmail_input_placeholder')">
                        <button type="submit" class="btn l-banner__sendmail__submit"><i class="iconz-long-arrow-right d-flex"></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div class="l-banner__pattern-fairy"></div>
       
    </section>
</template>

<script>

export default {
  name: 'BannerView',
}
</script>