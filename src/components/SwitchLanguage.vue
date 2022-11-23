<template>
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        <img :src="'assets/img/flag/' + $i18n.locale +'.png'" alt="">
      </button>
      <ul class="dropdown-menu dropdown-menu-xl-end">

        <li class="dropdown-item" :class="{  'active' : $i18n.locale == lang.key}" v-for="(lang, i) in langs" :key="`lang-${i}`">
          <a href="#" class="stretched-link" @click.prevent="onSwitchLanguage(lang.key)">
            <img
            :src="'assets/img/flag/' + lang.key +'.png'"
            alt=""><span>{{ lang.value }}</span>
          </a>
        </li>
     </ul>
  </template>
  <script>
  export default {
    name: 'SwitchLocale',
    data() {
      return { 
        langs: [
          {
            key : 'vi',
            value: 'Vietnamese'
          },
          {
            key : 'en',
            value: 'English'
          },
        ]
      }
    },
    methods: {
      onSwitchLanguage(lang){
        this.$i18n.locale = lang
      }
    },
    computed(){
     
    }
  }
  </script>
  <style>
  select {
      width: 150px;
      line-height: 49px;
      height: 38px;
      font-size: 22px;
      outline: 0;
      margin-bottom: 15px;
  }
  </style>