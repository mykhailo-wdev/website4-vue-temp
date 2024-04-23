<template>
  <header-section></header-section>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <div class="tradeholic-row">
          <h2 class="tradeholic-heading">Forex calculator</h2>
          <iframe src="https://test2.t247.win/en/widgets/foreks-kalkulyator/" frameborder="0" style="height: 700px; width: 100%; border: none;" title="Forex calculator"></iframe>
        </div>
        <div class="tradeholic-row row-50">
          <div class="tradeholic-col">
            <h2 class="tradeholic-heading">Position size calculator</h2>
            <iframe src="https://test2.t247.win/en/widgets/position-size-calculator/" frameborder="0" style="height: 400px; width: 100%; border: none;" title="Position size calculator"></iframe>
          </div>
          <div class="tradeholic-col">
            <h2 class="tradeholic-heading">Pip calculator</h2>
            <iframe src="https://test2.t247.win/en/widgets/kalkulyator-punktov/" frameborder="0" style="height: 220px; width: 100%; border: none;" title="Pip calculator"></iframe>
          </div>
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
      pageTitle: 'Calculators'
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
.row-50{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: $m-space-40;
}
@media (max-width: 992px) {
  .row-50{
    grid-template-columns: 1fr;
  }
}
</style>