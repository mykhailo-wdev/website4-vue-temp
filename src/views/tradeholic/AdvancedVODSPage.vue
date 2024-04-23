<template>
  <header-section></header-section>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/video-category/advanced/" frameborder="0" style="height: 2647px; width: 100%; border: none;" title="ADVANCED VODS"></iframe>
      </div>
    </section>
  </main>
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Advanced VODs'
    }
  },
  components: { HeaderSection, FooterSection, SubHeader }
}
</script>

<style lang="scss">
.tradeholic-wrap{
  padding: $m-space-132 0;
}
</style>