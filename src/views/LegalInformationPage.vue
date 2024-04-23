<template>
  <header-section></header-section>
  <section class="legal">
    <div class="container">
      <div class="legal-row">
        <div class="legal-col">
          <div class="tab-nav">
            <p class="tab-name" 
              id="tab-legal"
              :class="{ active: activeTab === 'legal' }" 
              @click="activateTab('legal')"
              >Legal Information</p>
            <p class="tab-name" 
              id="tab-disclaimer"
              :class="{ active: activeTab === 'disclaimer' }" 
              @click="activateTab('disclaimer')"
              >Disclaimer</p>
            <p class="tab-name" 
              id="tab-agreements"
              :class="{ active: activeTab === 'client-agreements' }" 
              @click="activateTab('client-agreements')"
              >Client Agreements</p>
            <p class="tab-name" 
              id="tab-regulations"
              :class="{ active: activeTab === 'regulations' }" 
              @click="activateTab('regulations')"
              >Regulations for Non-Trading Operations</p>
            <p class="tab-name" 
              id="tab-privacy"
              :class="{ active: activeTab === 'privacy-policy' }" 
              @click="activateTab('privacy-policy')"
              >Privacy Policy</p>
            <p class="tab-name" 
              id="tab-refund"
              :class="{ active: activeTab === 'refund-policy' }" 
              @click="activateTab('refund-policy')"
              >Refund Policy</p>
            <p class="tab-name" 
              id="tab-aml"
              :class="{ active: activeTab === 'aml-kyc-policy' }" 
              @click="activateTab('aml-kyc-policy')"
              >AML and KYC policy</p>
          </div>
        </div>
        <div class="legal-col">
          <div class="tab" 
            v-show="activeTab === 'legal'"
            >
            <p class="tab-title">Legal Information</p>
            <p class="tab-subtitle">There will be text about Legal Information</p>
          </div>
          <div class="tab" 
            v-show="activeTab === 'disclaimer'"
            >
            <p class="tab-title">Disclaimer</p>
            <p class="tab-subtitle">There will be text about Disclaimer</p>
          </div>
          <div class="tab" v-show="activeTab === 'client-agreements'">
            <p class="tab-title">Client Agreements</p>
            <p class="tab-subtitle">There will be text about Client Agreements</p>
          </div>
          <div class="tab" v-show="activeTab === 'regulations'">
            <p class="tab-title">Regulations for Non-Trading Operations</p>
            <p class="tab-subtitle">There will be text about Regulations for Non-Trading Operations</p>
          </div>
          <div class="tab" v-show="activeTab === 'privacy-policy'">
            <p class="tab-title">Privacy Policy</p>
            <p class="tab-subtitle">There will be text about Privacy Policy</p>
            
          </div>
          <div class="tab" v-show="activeTab === 'refund-policy'">
            <p class="tab-title">Refund Policy</p>
            <p class="tab-subtitle">There will be text about Refund Policy</p>
          </div>
          <div class="tab" v-show="activeTab === 'aml-kyc-policy'">
            <p class="tab-title">Aml-kyc-policy</p>
            <p class="tab-subtitle">There will be text about Aml-kyc-policy</p>
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
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data () {
    return {
      isActiveColor: false
    }
  },
  computed: {
    ...mapState(['activeTab',
                  'companyName', 
                  'companyAddress', 
                  'companyPhone', 
                  'companyEmail', 
                  'companyRegisterNumber', 
                  'companyWebSite',
                  'companyCountry'
                ]),
  },
  methods: {
      ...mapActions(['updateActiveTab']),
      ...mapMutations(['updateData']),
      activateTab(tabName) {
        this.updateActiveTab(tabName); 
        this.$router.push({ query: { doc: tabName } });
        if (window.innerWidth <= 992) {
        this.scrollToTab(tabName);
      }
    },
      scrollToTab(tabName) {
      const tabElement = document.getElementById(`tab-${tabName}`);
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  },
  components: { HeaderSection, FooterSection },
  created() {
  this.updateActiveTab(this.activeTab);
  const docParam = this.$route.query.doc;
    if (docParam) {
      this.updateActiveTab(docParam);
    }
  }
}
</script>

<style lang="scss">
.legal {
  padding: 152px 0 $m-space-132;
}
.legal-row {
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  gap: $m-space-64;
}
.tab-nav{
  background: $light-silver;
  border-radius: $border-radius-44;
  overflow: hidden;
}
.tab-name{
  @include text-main;
  text-align: left;
  padding: $m-space-16 $m-space-40;
  cursor: pointer;
}
.active{
  background: $normal-blue;
  color: $color-white;
}
.tab-title{
  @include text-big;
  text-align: left;
  text-transform: uppercase;
}
.tab-subtitle{
  @include text-main;
  margin-top: 8px;
  text-align: left;
    strong{
    font-weight: 700;
  }
}
.m-top{
  margin-top: $m-space-40;
}
.tab-item{
  @include text-main;
  text-align: left;
}
@media (max-width: 992px) {
  .legal-row{
    grid-template-columns: 1fr;
  }
  .tab-nav{
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 992px) {
  .tab-nav{
    grid-template-columns: 1fr;
  }
}

</style>
