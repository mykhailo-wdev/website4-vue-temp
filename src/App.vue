<template>
  <router-view></router-view>
  <scroller-top></scroller-top>
</template>

<script>
import ScrollerTop from '@/components/ScrollerTop.vue';


export default {
  name: 'App',
  components: { ScrollerTop },
  methods: {
    changeLanguage(lang) {
      document.documentElement.setAttribute('lang', lang);
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'EN'; 
    this.changeLanguage(lang);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
