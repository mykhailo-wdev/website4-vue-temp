<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/znakomstvo-s-fundamentalnym-analizom/" frameborder="0" style="height: 3694px; width: 100%; border: none;" title="КУРС «ПРОДВИНУТЫМ»"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Course Advanced'
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