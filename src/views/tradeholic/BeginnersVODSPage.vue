<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <main>
    <section class="tradeholic-wrap">
      <div class="container">
        <iframe src="https://test2.t247.win/en/video-category/beginners/" frameborder="0" style="height: 2632px; width: 100%; border: none;" title="BEGINNERS VODS"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from '@/components/part-template/SubHeader.vue';
export default {
  data () {
    return {
      pageTitle: 'Begginer VODs'
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