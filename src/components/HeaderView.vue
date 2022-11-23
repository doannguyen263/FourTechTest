<template>
  
    <header class="l-header" data-toggle="sticky-onscroll">
      <div class="container-fluid d-flex align-items-center">
        <div class="logo ef--shine">
          <a href="index.html">
            <img src="images/logo.svg">
          </a>
        </div>
        <div class="main__nav ms-auto d-none d-xl-block">
          <ul class="el-menu">
            <li class="menu-item"><a href="#about-us">{{ $t("header.aboutUs") }}</a></li>
            <li class="menu-item"><a href="#games">{{ $t("header.games") }}</a></li>
            <li class="menu-item"><a href="#partners">{{ $t("header.partners") }}</a></li>
            <li class="menu-item"><a href="#contact-us">{{ $t("header.contactUs") }}</a></li>
          </ul>
        </div>

        <div class="c-language dropdown d-none d-xl-block">
            <SwitchLanguage />
        </div>

        <a href="#menu__mobile" class="mburger d-flex d-xl-none justify-content-end ms-auto">
          <span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span>
        </a>
      </div>
    </header>
</template>
  
<script>
import SwitchLanguage from './SwitchLanguage.vue';
export default {
  name: 'HeaderView',
  components:{
    SwitchLanguage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
