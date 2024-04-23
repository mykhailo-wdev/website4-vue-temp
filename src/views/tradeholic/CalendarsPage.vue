<template>
  <header-section></header-section>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <div class="tradeholic-row">
          <h2 class="tradeholic-heading">Economic calendar</h2>
          <iframe src="https://test2.t247.win/en/widgets/ekonomicheskij-kalendar/" frameborder="0" style="height: 800px; width: 100%; border: none;" title="Economic calendar"></iframe>
        </div>
        <div class="tradeholic-row">
          <h2 class="tradeholic-heading">Interest rate calendar</h2>
          <iframe src="https://test2.t247.win/en/widgets/kalendar-proczentnyh-stavok/" frameborder="0" style="height: 680px; width: 100%; border: none;" title="Interest rate calendar"></iframe>
        </div>
        <div class="tradeholic-row">
          <h2 class="tradeholic-heading">Public holidays calendar</h2>
          <iframe src="https://test2.t247.win/en/widgets/kalendar-gosudarstvennyh-prazdnikov/" frameborder="0" style="height: 600px; width: 100%; border: none;" title="Public holidays calendar"></iframe>
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
      pageTitle: 'Calendars'
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