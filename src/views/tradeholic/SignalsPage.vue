<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/widgets/tehnicheskie-indikatory/" frameborder="0" style="height: 450px; width: 100%; border: none;" title="Signals"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Signals'
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