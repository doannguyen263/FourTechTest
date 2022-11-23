<template>
  <HeaderView />
  <BannerView/>
  <AboutView/>
  <OurGameView/>
  <PartnersView/>
  <FooterView/>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import BannerView from './components/BannerView.vue'
import AboutView from './components/AboutView.vue'
import OurGameView from './components/OurGameView.vue'
import PartnersView from './components/PartnersView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    BannerView,
    AboutView,
    OurGameView,
    PartnersView,
    FooterView
  }
}

</script>
