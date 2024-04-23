<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/publication-category/opredelenie-potenciala-trenda/" frameborder="0" style="height: 1900px; width: 100%; border: none;" title="DETERMINATING TREND POTENTIAL"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Determinating trend potential'
    }
  },
  components: { SubHeader }
}
</script>

<style lang="scss">
.tradeholic-wrap{
  padding: $m-space-132 0;
}
</style>