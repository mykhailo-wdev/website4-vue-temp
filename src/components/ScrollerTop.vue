<template>
    <button :id="'scroller'" @click="scrollToTop" v-show="showScroller">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.666748 12.0013L2.66425 13.9988L10.5834 6.0938V23.3346H13.4167V6.0938L21.3217 14.013L23.3334 12.0013L12.0001 0.667969L0.666748 12.0013Z"
            fill="white" />
    </svg>
</button>
</template>

<script>
export default {
  data() {
    return {
      showScroller: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      if (window.scrollY > 150) {
        this.showScroller = true;
      } else {
        this.showScroller = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss">
#scroller {
    display: inline-block;
    overflow: hidden;
    position: fixed;
    right: 30px;
    bottom: 10%;
    width: 60px;
    height: 60px;
    background-color: $light-blue;
    border: 1px solid $dark-blue;
    border-radius: 50%;
    cursor: pointer;
    transition: $transition-extra;
    z-index: 99;
    &:hover {
        background-color: $dark-blue;
    }
}
@media screen and (max-width: 768px) {
#scroller {
    right: 10px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    }
}
</style>