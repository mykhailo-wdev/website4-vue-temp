<template>
  <a :href="urlLoginAccount" class="btn-login">{{$t('header.login')}}</a>
</template>

<script>
export default {
  data () {
    return {
      urlLoginAccount: 'https://link-template/auth/login?lang=en'
    }
  }
};
</script>

<style lang="scss">
.btn-login {
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @include btn-styles;
  text-transform: none;
  color: $normal-blue;
  padding: 15px $m-space-30;
  border-radius: $border-radius-44;
  &:hover {
    background: $btn-bg;
    color: $color-white;
    border-radius: $border-radius-44;
  }
}
</style>
