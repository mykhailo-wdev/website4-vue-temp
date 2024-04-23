<template>
    <footer>
        <section class="footer-wrap">
            <div class="container">
                <div class="footer-row">
                    <div class="footer-col--left">
                        <img src="../assets/images/header/logo.svg" alt="logo">
                        <div class="footer-contacts">
                            <div class="footer-line">
                                <div class="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                        <path d="M24.7778 19.4126C23.2561 19.4126 21.7833 19.1681 20.4145 18.7159C19.9928 18.5814 19.51 18.6792 19.1739 19.0154L16.4851 21.7104C13.0201 19.9504 10.1906 17.1209 8.43059 13.662L11.1195 10.9609C11.4556 10.6248 11.5533 10.142 11.4189 9.72036C10.9667 8.35149 10.7223 6.87869 10.7223 5.35703C10.7222 4.67864 10.1783 4.13477 9.5 4.13477H5.2222C4.55 4.13477 4 4.67864 4 5.35697C4 16.8336 13.3011 26.1348 24.7778 26.1348C25.4561 26.1348 26 25.5909 26 24.9126V20.6348C26 19.9564 25.4561 19.4126 24.7778 19.4126Z" fill="#666666"/>
                                    </svg>
                                </div>
                                <a :href="'tel:' + companyPhone" class="footer-info">{{  companyPhone }}</a>
                            </div>
                            <div class="footer-line">
                                <div class="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                        <path d="M3.50114 6.5952C6.79505 9.38478 12.5748 14.2925 14.2736 15.8227C14.5016 16.0293 14.7462 16.1343 15.0001 16.1343C15.2535 16.1343 15.4977 16.0303 15.7253 15.8247C17.4255 14.293 23.2052 9.38478 26.4992 6.5952C26.7043 6.42186 26.7355 6.11717 26.5695 5.90525C26.1857 5.41555 25.6134 5.13477 25.0001 5.13477H5.00016C4.38689 5.13477 3.81459 5.41555 3.43083 5.9053C3.2648 6.11717 3.29606 6.42186 3.50114 6.5952Z" fill="#666666"/>
                                        <path d="M26.71 9.03001C26.5327 8.94751 26.3242 8.97629 26.1768 9.10229C22.5239 12.199 17.8618 16.1682 16.395 17.49C15.5717 18.2331 14.4292 18.2331 13.604 17.489C12.0405 16.0803 6.80512 11.6296 3.82322 9.10225C3.67477 8.97625 3.4658 8.94845 3.29002 9.02997C3.1133 9.11204 3 9.28881 3 9.48362V22.0578C3 23.1609 3.89695 24.0579 5.00002 24.0579H25C26.103 24.0579 27 23.1609 27 22.0578V9.48362C27 9.28881 26.8867 9.11158 26.71 9.03001Z" fill="#666666"/>
                                    </svg>
                                </div>
                                <a :href="'mailto:' + companyEmail" class="footer-info">{{  companyEmail }}</a>
                            </div>
                            <div class="footer-line">
                                <div class="footer-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                        <path d="M13.5001 0.134766C8.10823 0.134766 3.72168 4.52132 3.72168 9.91309C3.72168 16.6044 12.4724 26.4278 12.8449 26.8427C13.1949 27.2324 13.8059 27.2317 14.1552 26.8427C14.5277 26.4278 23.2784 16.6044 23.2784 9.91309C23.2783 4.52132 18.8918 0.134766 13.5001 0.134766ZM13.5001 14.8328C10.7873 14.8328 8.58036 12.6259 8.58036 9.91309C8.58036 7.20033 10.7873 4.99339 13.5001 4.99339C16.2128 4.99339 18.4197 7.20038 18.4197 9.91314C18.4197 12.6259 16.2128 14.8328 13.5001 14.8328Z" fill="#666666"/>
                                    </svg>
                                </div>
                                <p class="footer-info">{{ companyAddress }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-col--center">
                        <p class="footer-heading">{{$t('footer.footerheading')}}</p>
                        <p class="footer-subheading">{{$t('footer.footersubheading')}}</p>
                        <p class="footer-subheading">{{$t('footer.footersubheading2')}}</p>
                        <span class="footer-reserved" v-if="isReservedDesktop">
                            {{$t('footer.footerreserved')}} 
                            {{ companyName }} 
                            {{$t('footer.footerreserved2')}}</span>
                    </div>
                    <div class="footer-col--right">
                        <p class="footer-heading">&nbsp;</p>
                        <p class="footer-subheading">
                            {{$t('footer.footersubheading3')}} 
                            {{ companyWebSite }} 
                            {{$t('footer.footersubheading4')}} 
                            {{ companyName }}, 
                            {{$t('footer.footersubheading5')}} 
                            {{ companyRegisterNumber }}. 
                            {{ companyName }}, 
                            {{  companyAddress }}.</p>
                        <p class="footer-subheading">
                            {{$t('footer.footersubheading6')}}  
                            {{ companyName }} 
                            {{$t('footer.footersubheading7')}} 
                            {{ companyWebSite }} 
                            {{$t('footer.footersubheading8')}} 
                        </p>
                        <span class="footer-reserved" v-if="isReservedMobile">
                            {{$t('footer.footerreserved')}} 
                            {{ companyName }} 
                            {{$t('footer.footerreserved2')}}</span>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
  export default {
    data () {
        return {
            isReservedMobile: false,
            isReservedDesktop: true
        }
    },
    computed: { 
        ...mapState(['companyName', 
                    'companyAddress', 
                    'companyPhone', 
                    'companyEmail', 
                    'companyRegisterNumber', 
                    'companyWebSite'])
    },
    methods: {
        ...mapMutations(['updateData'])
    },
    mounted() {
        if (window.innerWidth <= 992) {
            this.isReservedMobile = true
            this.isReservedDesktop = false
        }
    }
  }
</script>

<style lang="scss">
  .footer-wrap{
    padding: $m-space-80 0;
    border-top: 1px solid $light-blue;

    .footer-row{
        @include flex-top-element;
    }
    .footer-col--left{
        flex: 0 0 20%;
    }
    .footer-col--center{
        flex: 0 0 38%;
    }
    .footer-col--right{
        flex: 0 0 38%;
    }
    .footer-contacts{
        margin-top: $m-space-70;
    }
    .footer-line{
        @include flex-center-element;
        justify-content: flex-start;
        margin-top: $m-space-32;
    }
    .footer-info{
        text-align: left;
        text-decoration: none;
        color: $dark-silver;
        padding-left: 13px;
        font-family: $font-family-s;
        font-size: clamp(14px, 1.14vw, 16px);
        line-height: 130%;
        letter-spacing: 0.48px;
    }
    .footer-heading{
        text-align: left;
        font-family: $font-family-s;
        font-size: $text-info;
        text-transform: uppercase;
        color: $color-black;
        font-weight: 400;
        line-height: normal;
    }
    .footer-subheading, .footer-reserved{
        text-align: left;
        margin-top: $m-space-24;
        font-family: $font-family-s;
        font-size: 13px;
        color: $dark-silver;
        line-height: normal;
    }
    .footer-reserved{
        text-align: left;
        padding: 0 6px;
        display: block;
    }
    .payments-list{
        @include flex-center-element;
        flex-wrap: wrap;
    }
    .payments-item{
        margin: $m-space-24 $m-space-8 0;
    }
}
@media (max-width: 992px) {
    .footer-wrap{
        .footer-row{
            flex-direction: column;
        }
        .footer-col--left, .footer-col--center, .footer-col--right{
            width: 100%;
        }
        .footer-line{
            margin-top: $m-space-16;
        }
        .footer-col--center{
            margin-top: $m-space-48;
        }
        .footer-col--right .footer-heading{
            display: none;
        }
        .footer-subheading{
            margin-top: 8px;
        }
    }
}
</style>