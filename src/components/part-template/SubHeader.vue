<template>
    <section class="subheader-wrap">
        <div class="container">
            <h1 class="subheader-title">{{ $t(pageTitle) }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    props: ['pageTitle']
}
</script>

<style lang="scss">
    .subheader-wrap{
        padding-top: 100px;
        background: url("../../assets/images/account/subheader_bg.jpg") no-repeat top center;
        background-size: cover;
        height: 420px;
        display: flex;
        align-items: center;
    }
    .subheader-title{
        @include text-h1;
        text-align: left;
    }
</style>