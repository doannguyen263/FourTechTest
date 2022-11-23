<template>
    <section id="about-us" class="l-about">
        <div class="container">
            <div class="c-content">
                <div class="row g-xl-40">
                    <div class="col-md-6">
                        <header class="c-header wow fadeInLeft">
                            <h2 class="c-header__title pb-md-3">{{ $t("sc_about.title") }}</h2>
                            <div class="c-header__excerpt">
                                {{ $t("sc_about.des") }}
                            </div>
                        </header>
                        <ul class="l-about__list row wow fadeInUp">
                            <li class="col-6 col-md-12">
                                <p class="-number">600<span>M</span>+</p>
                                <p class="-text">{{ $t("sc_about.users") }}</p>
                            </li>
                            <li class="col-6 col-md-12">
                                <p class="-number">135+</p>
                                <p class="-text">{{ $t("sc_about.games") }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="p-box wow fadeInRight">
                            <ul>
                                <li>
                                    <div class="p-box__thumb">
                                        <img src="images/icon-hour.svg" alt="">
                                    </div>
                                    <div class="p-box__meta">
                                        <h3 class="p-box__title">{{ $t("sc_about.box_title1") }}</h3>
                                        <p>{{ $t("sc_about.box_des1") }}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-box__thumb">
                                        <img src="images/icon-design.svg" alt="">
                                    </div>
                                    <div class="p-box__meta">
                                        <h3 class="p-box__title">{{ $t("sc_about.box_title2") }}</h3>
                                        <p>{{ $t("sc_about.box_des2") }}</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="p-box__thumb">
                                        <img src="images/icon-team.svg" alt="">
                                    </div>
                                    <div class="p-box__meta">
                                        <h3 class="p-box__title">{{ $t("sc_about.box_title3") }}</h3>
                                        <p>{{ $t("sc_about.box_des3") }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-partern">
                <div class="p-partern__witch"></div>
                <div class="p-partern__map"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutView',
  props: {
    msg: String
  }
}
</script>