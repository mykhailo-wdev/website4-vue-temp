<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/video/cryptocurrencies/" frameborder="0" style="height: 1010px; width: 100%; border: none;" title="CRYPTOCURRENCY"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Cryptocurrency'
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