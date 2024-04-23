<template>
  <header-section></header-section>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <div class="tradeholic-row">
          <h5 class="tradeholic-heading">Forex Market Hours</h5>
          <iframe src="https://test2.t247.win/en/widgets/raspisanie-torgovyh-sessij-forex/" frameborder="0" style="height: 650px; width: 100%; border: none;" title="Forex Market Hours"></iframe>
        </div>
        <div class="tradeholic-row">
          <h5 class="tradeholic-heading">Forex Cross Rates</h5>
          <iframe src="https://test2.t247.win/en/widgets/tablicza-kursov/" frameborder="0" style="height: 650px; width: 100%; border: none;" title="Forex Cross Rates"></iframe>
        </div>
        <div class="tradeholic-row">
          <h5 class="tradeholic-heading">Market Summary</h5>
          <iframe src="https://test2.t247.win/en/widgets/obzor-rynka/" frameborder="0" style="height: 650px; width: 100%; border: none;" title="Market Summary"></iframe>
        </div>
        <div class="tradeholic-row">
          <h5 class="tradeholic-heading">Pivot points</h5>
          <iframe src="https://test2.t247.win/en/widgets/opornye-urovni/" frameborder="0" style="height: 320px; width: 100%; border: none;" title="Pivot points"></iframe>
        </div>
        <div class="tradeholic-row">
          <h5 class="tradeholic-heading">Historical sentiment index</h5>
          <iframe src="https://test2.t247.win/en/widgets/istoricheskij-indeks-rynochnyh-nastroenij/" frameborder="0" style="height: 340px; width: 100%; border: none;" title="Historical sentiment index"></iframe>
        </div>
        <div class="tradeholic-row">
          <iframe src="https://test2.t247.win/en/widgets/indeks-rynochnyh-nastroenij/" frameborder="0" style="height: 800px; width: 100%; border: none;" title="Historical sentiment index"></iframe>
        </div>
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
      pageTitle: 'Informers'
    }
  },
  components: { HeaderSection, FooterSection, SubHeader }
}
</script>

<style lang="scss">
.tradeholic-wrap{
  padding: $m-space-132 0;
}
.tradeholic-heading{
  @include text-h2;
  margin-bottom: $m-space-24;
  text-align: center;
}
.tradeholic-row{
  margin-bottom: $m-space-64;
}
</style>