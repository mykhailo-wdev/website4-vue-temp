<template>
  <header-section></header-section>
  <sub-header pageTitle="account.accountTypes"></sub-header>
  <section class="account-wrap">
    <div class="container">
      <div class="account-items">
        <div class="account-item">
          <p class="account-name">{{$t('account.accountname')}}</p>
          <p class="account-value">€ 2000</p>
          <p class="account-details">{{$t('account.accountdetails')}} 24/5</p>
          <p class="account-details">{{$t('account.accountdetails2')}}: {{$t('account.fixed')}}</p>
          <p class="account-details">{{$t('account.accountdetails3')}}: {{$t('account.fixed')}}</p>
          <p class="account-details account-yes">{{$t('account.accountdetails4')}}</p>
          <p class="account-details">{{$t('account.accountdetails5')}}: 1:100</p>
          <p class="account-details">{{$t('account.accountdetails6')}}: {{$t('account.commissionfree')}}</p>
          <p class="account-details">{{$t('account.accountdetails7')}}: {{$t('account.up48')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails8')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails9')}}</p>
          <p class="account-details">{{$t('account.accountdetails10')}} {{$t('account.accountdetails12')}} 30%</p>
          <p class="account-details account-yes">{{$t('account.accountdetails11')}}</p>
          <div class="account-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
        <div class="account-item">
          <p class="account-name">{{$t('account.accountname2')}}</p>
          <p class="account-value">€ 5000</p>
          <p class="account-details">{{$t('account.accountdetails')}} 24/5</p>
          <p class="account-details">{{$t('account.accountdetails2')}}: {{$t('account.fixed')}}</p>
          <p class="account-details">{{$t('account.accountdetails3')}}: {{$t('account.fixed')}}</p>
          <p class="account-details account-yes">{{$t('account.accountdetails4')}}</p>
          <p class="account-details">{{$t('account.accountdetails5')}}: 1:100</p>
          <p class="account-details">{{$t('account.accountdetails6')}}: {{$t('account.commissionfree')}}</p>
          <p class="account-details">{{$t('account.accountdetails7')}}: {{$t('account.up48')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails8')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails9')}}</p>
          <p class="account-details">{{$t('account.accountdetails10')}} {{$t('account.accountdetails12')}} 50%</p>
          <p class="account-details account-yes">{{$t('account.accountdetails11')}}</p>
          <div class="account-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
        <div class="account-item">
          <p class="account-name">{{$t('account.accountname3')}}</p>
          <p class="account-value">€ 25000</p>
          <p class="account-details">{{$t('account.accountdetails')}} 24/5</p>
          <p class="account-details">{{$t('account.accountdetails2')}}: {{$t('account.fixed')}}</p>
          <p class="account-details">{{$t('account.accountdetails3')}}: {{$t('account.fixed')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails4')}}</p>
          <p class="account-details">{{$t('account.accountdetails5')}}: 1:200</p>
          <p class="account-details">{{$t('account.accountdetails6')}}: {{$t('account.commissionfree')}}</p>
          <p class="account-details">{{$t('account.accountdetails7')}}: {{$t('account.up24')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails8')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails9')}}</p>
          <p class="account-details">{{$t('account.accountdetails10')}} {{$t('account.accountdetails12')}} 100%</p>
          <p class="account-details account-no">{{$t('account.accountdetails11')}}</p>
          <div class="account-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
        <div class="account-item">
          <p class="account-name">{{$t('account.accountname4')}}</p>
          <p class="account-value">€ 50000</p>
          <p class="account-details">{{$t('account.accountdetails')}} 24/7</p>
          <p class="account-details">{{$t('account.accountdetails2')}}: 0.7 points</p>
          <p class="account-details">{{$t('account.accountdetails3')}}: {{$t('account.fixed')}}</p>
          <p class="account-details account-no">{{$t('account.accountdetails4')}}</p>
          <p class="account-details">{{$t('account.accountdetails5')}}: 1:400</p>
          <p class="account-details">{{$t('account.accountdetails6')}}: {{$t('account.commissionfree')}}</p>
          <p class="account-details">{{$t('account.accountdetails7')}}: {{$t('account.up3')}}</p>
          <p class="account-details account-yes">{{$t('account.accountdetails8')}}</p>
          <p class="account-details account-yes">{{$t('account.accountdetails9')}}</p>
          <p class="account-details">{{$t('account.accountdetails10')}} {{$t('account.accountdetails12')}} 150%</p>
          <p class="account-details account-yes">{{$t('account.accountdetails11')}}</p>
          <div class="account-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import SubHeader from '@/components/part-template/SubHeader.vue';
import OpenAccountBtn from '@/components/buttons/OpenAccountBtn.vue';
export default {
  data (){
    return{
    }
  },
  components: { HeaderSection, FooterSection, SubHeader, OpenAccountBtn }
}
</script>

<style lang="scss">
  .account-wrap{
    margin: $m-space-132 0;
  }
  .account-items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: $m-space-24;
  }
  .account-item{
    background: $light-silver;
    border-radius: $border-radius-44;
    padding: $m-space-48 $m-space-24;
  }
  .account-name{
    @include text-h2;
  }
  .account-value{
    background-color: #13b3f0;
    background-image: linear-gradient(90deg, #97def8, #13b3f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1.3px;
    margin-top: 8px;
    @include text-big;
    padding-bottom: $m-space-24;
    border-bottom: 1px solid $light-blue;
  }
  .account-details{
    @include text-main;
    text-align: center;
    margin-top: $m-space-16;
  }
  .account-btn{
    margin-top: $m-space-24;
  }
  .account-no{
    display: inline-flex;
    align-items: center;
    position: relative;
    &::after{
      float: right;
      content: "";
      display: flex;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      background: url('../assets/images/account/no.svg') no-repeat center;
      background-size: contain;
      margin-left: 12px;
    }
  }
  .account-yes{
    display: inline-flex;
    align-items: center;
    position: relative;
    &::after{
      float: right;
      content: "";
      display: flex;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      background: url('../assets/images/account/yes.svg') no-repeat center;
      background-size: contain;
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 992px) {
    .account-items{
      grid-template-columns: repeat(2, 1fr);
    }
    .account-item{
      padding: $m-space-48 $m-space-48;
    }
  }
  @media screen and (max-width: 768px) {
    .account-item{
      padding: $m-space-48 $m-space-24;
    }
  }
  @media screen and (max-width: 500px) {
    .account-items{
      grid-template-columns: 0.7fr;
    }
    .account-item{
      padding: $m-space-48 $m-space-32;
    }
  }
  @media screen and (max-width: 400px) {
    .account-items{
      grid-template-columns: 1fr;
    }
  }
</style>