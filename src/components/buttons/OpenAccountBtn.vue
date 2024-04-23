<template>
  <a :href="urlOpenAccount" class="btn-account">{{$t('header.openaccount')}}</a>
</template>

<script>
export default {
  data () {
    return {
      urlOpenAccount: 'https://link-template/auth/register?lang=en'
    }
  }
};
</script>

<style lang="scss">
.btn-account {
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @include btn-styles;
  text-transform: none;
  background: $normal-blue;
  color: $color-white;
  border-radius: $border-radius-44;
  padding: 15px $m-space-30;
  &:hover {
    transition: $transition-extra;
    background: $btn-bg;
    color: $color-white;
  }
}
</style>
