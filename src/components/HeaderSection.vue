<template>
    <header id="header">
      <div class="container">
        <div class="menu-section">
          <div class="menu-left">
            <span class="menu-toggle" @click="showMenu" aria-label="button menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <p class="menu-desc">{{$t('header.menu')}}</p>
            <nav class="navbar" :class="{ 'navbar-open': isMenuOpen }">
              <span
                class="navbar-close"
                @click="closeMenu"
                aria-label="close menu"
                >&#10006;</span
              >
              <div class="container">
                <ul class="navbar-list">
                  <li class="navbar-item">
                    <p class="navbar-section" @click="showSubmenu('home')">
                      {{$t('menu.home')}}
                      <span
                        class="arrow-icon"
                        :class="{ 'arrow-icon-rotate': isSubmenuOpen.home }"
                      ></span>
                    </p>
                    <ul
                      class="navbar-submenu"
                      :class="{ 'show-navbar-submenu': isSubmenuOpen.home }"
                    >
                      <li class="navbar-page">
                        <a href="#" class="navbar-link">{{$t('menu.platform')}}</a>
                      </li>
                      <li class="navbar-page">
                        <router-link to="/account-type" class="navbar-link"
                          >{{$t('menu.typesofaccounts')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/about" class="navbar-link"
                          >{{$t('menu.aboutus')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/contacts" class="navbar-link"
                          >{{$t('menu.contacts')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/legal-information" class="navbar-link"
                          >{{$t('menu.legalinformation')}}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item">
                    <p class="navbar-section" @click="showSubmenu('investors')">
                      {{$t('menu.investors')}}
                      <span
                        class="arrow-icon"
                        :class="{ 'arrow-icon-rotate': isSubmenuOpen.investors }"
                      ></span>
                    </p>
                    <ul
                      class="navbar-submenu"
                      :class="{ 'show-navbar-submenu': isSubmenuOpen.investors }"
                    >
                      <li class="navbar-page">
                        <router-link to="/informers" class="navbar-link"
                          >{{$t('menu.informers')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/calendars" class="navbar-link"
                          >{{$t('menu.calendars')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/calculators" class="navbar-link"
                          >{{$t('menu.calculators')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/signals" class="navbar-link"
                          >{{$t('menu.signals')}}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item">
                    <p class="navbar-section" @click="showSubmenu('training')">
                      {{$t('menu.training')}}
                      <span
                        class="arrow-icon"
                        :class="{ 'arrow-icon-rotate': isSubmenuOpen.training }"
                      ></span>
                    </p>
                    <ul
                      class="navbar-submenu"
                      :class="{ 'show-navbar-submenu': isSubmenuOpen.training }"
                    >
                      <li class="navbar-page">
                        <router-link to="/course-beginner" class="navbar-link"
                          >{{$t('menu.beginnersguide')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/course-advanced" class="navbar-link"
                          >{{$t('menu.advancedguide')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/beginner-vods" class="navbar-link"
                          >{{$t('menu.beginnersvods')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/advanced-vods" class="navbar-link"
                          >{{$t('menu.advancedvods')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/cryptocurency" class="navbar-link"
                          >{{$t('menu.cryptocurrency')}}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="navbar-item">
                    <p class="navbar-section" @click="showSubmenu('analytics')">
                      {{$t('menu.analytics')}}
                      <span
                        class="arrow-icon"
                        :class="{ 'arrow-icon-rotate': isSubmenuOpen.analytics }"
                      ></span>
                    </p>
                    <ul
                      class="navbar-submenu"
                      :class="{ 'show-navbar-submenu': isSubmenuOpen.analytics }"
                    >
                      <li class="navbar-page">
                        <router-link to="/news" class="navbar-link"
                          >{{$t('menu.news')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link
                          to="/fundamental-analysis"
                          class="navbar-link"
                          >{{$t('menu.fundamentalanalysis')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/technical-analysis" class="navbar-link"
                          >{{$t('menu.technicalanalysis')}}</router-link
                        >
                      </li>
                      <li class="navbar-page">
                        <router-link to="/determinating-trend" class="navbar-link"
                          >{{$t('menu.determinatingtrendpotential')}}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="menu-lng">
              <div class="menu-lng">
                <button class="menu-lng-btn" @click="toggleLanguageDropdown">{{ currentLanguage }}</button>
                <ul v-if="isLanguageDropdownOpen" class="language-dropdown-options">
                  <li v-if="currentLanguage !== 'EN'" @click="changeLanguage('en')">EN</li>
                  <li v-if="currentLanguage !== 'RU'" @click="changeLanguage('ru')">RU</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="menu-logo">
            <router-link to="/">
              <img
                src="@/assets/images/header/logo.svg"
                alt="logo"
              />
            </router-link>
          </div>
          <div class="menu-btns">
            <open-account-btn></open-account-btn>
            <login-account-btn></login-account-btn>
          </div>
          <div class="menu-btns__mobile">
            <mobile-login-acc-btn></mobile-login-acc-btn>
            <mobile-open-acc-btn></mobile-open-acc-btn>
          </div>
        </div>
    </div>
    </header>
</template>

<script>
import LoginAccountBtn from "./buttons/LoginAccountBtn.vue";
import OpenAccountBtn from "./buttons/OpenAccountBtn.vue";
import MobileLoginAccBtn from "./buttons/MobileLoginAccBtn.vue";
import MobileOpenAccBtn from "./buttons/MobileOpenAccBtn.vue";
export default {
  data() {
    return {
      isMenuOpen: false,
      isSubmenuOpen: {
        home: false,
        investors: false,
        training: false,
        analytics: false,
      },
      isLanguageDropdownOpen: false,
      currentLanguage: ''
    };
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en'; 
    this.currentLanguage = lang === 'ru' ? 'RU' : 'EN'; 
  },
  methods: {
    showMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    showSubmenu(section) {
      if (window.innerWidth <= 768) {
        for (const key in this.isSubmenuOpen) {
          if (key !== section) {
            this.isSubmenuOpen[key] = false;
          }
        }
        this.isSubmenuOpen[section] = !this.isSubmenuOpen[section];
      }
    },
    changeLanguage(lang) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('lang', lang);
      window.location.search = urlParams.toString();
      
      this.currentLanguage = lang === 'ru' ? 'RU' : 'EN';
    },
    toggleLanguageDropdown() {
      this.isLanguageDropdownOpen  = !this.isLanguageDropdownOpen ;
    }
    

  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.isSubmenuOpen = {
        home: false,
        investors: false,
        training: false,
        analytics: false,
      };
    }
  },
  components: {
    OpenAccountBtn,
    LoginAccountBtn,
    MobileLoginAccBtn,
    MobileOpenAccBtn
  },
};
</script>
<style lang="scss">
#header{
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: $color-white;
  z-index: 500;
}


.menu-lng{
  margin: 0 8px;
}
.menu-lng{
  position: relative;
}
.menu-lng-btn{
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  @include text-main;
  font-weight: 700;
  
}
.language-dropdown-options{
  position: absolute;
  top: 26px;
  left: 5px;
  li{
    cursor: pointer;
  }
}




.menu-section {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-left {
    display: flex;
    align-items: center;
  }
  .menu-desc {
    @include btn-styles;
    text-transform: none;
    padding-left: 6px;
    color: $color-black;
  }
  .menu-toggle {
    width: 30px;
    height: 20px;
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    align-items: center;
      span {
      display: block;
      width: 100%;
      background: $color-black;
      height: 2px;
      transition: $transition-extra;
      &:nth-child(3){
        width: 16px;
      }
      &:hover{
        background: $color-black;
      }
    }
  }
  .navbar {
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $dark-silver;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: $transition-long;
    transform: translateX(-100%);
    z-index: 1000;
  }
  .navbar-open {
    z-index: 1000;
    transform: translateY(0);
  }
  .navbar-close {
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    color: $color-white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transition: $transition-extra;
    &:hover {
      color: $dark-blue;
    }
  }
  .menu-lng-name {
    @include btn-styles;
    color: $color-black;
    margin-left: $m-space-30;
  }
  .menu-btns {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    gap: $m-space-30;
  }
  .menu-btns__mobile {
    display: none;
  }
  .navbar-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $m-space-30;
  }
  .navbar-section {
    font-size: clamp(20px, 1.5vw, 28px);
    font-weight: 700;
    color: $normal-blue;
    margin-bottom: $m-space-30;
    position: relative;
  }
  .navbar-page {
    margin-bottom: $m-space-16;
  }
  .navbar-link {
    cursor: pointer;
    text-decoration: none;
    font-size: clamp(16px, 1.42vw, 20px);
    line-height: 1.2em;
    color: $color-white;
    font-weight: 700;
    position: relative;
    letter-spacing: 1px;
    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 2px;
      background-color: $color-white;
      transition: $transition-extra;
      transform: scaleX(0);
      transform-origin: center;
    }
    &:visted {
      color: inherit;
    }
  }
}
@media screen and (max-width: 768px) {
  .menu-section {
    height: auto;
    display: grid;
    justify-content: space-between;
    padding: 20px 0;
    gap: 20px 0;

    .menu-left {
      grid-row: 2/3;
      grid-column: 1/2;
    }
    .menu-logo {
      grid-row: 1/2;
      grid-column: 1/3;
      width: 130px;
      margin: 0 auto;
    }
    .menu-btns {
      display: none;
    }
    .menu-btns__mobile {
      display: grid;
      grid-row: 2/3;
      grid-column: 2/3;
      grid-template-columns: repeat(2, 40px);
      gap: 20px;
    }

    .navbar-list {
      grid-template-columns: 1fr;
    }
    .navbar-item {
      width: 180px;
      margin: 0 auto;
    }
    .navbar-section {
      cursor: pointer;
      transition: $transition-long;
      position: relative;
      display: inline-block;
    }
    .arrow-icon {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: -20px;
      background: url("../assets/images/header/arrow_menu.svg") no-repeat center;
      background-size: contain;
      width: 8px;
      height: 6px;
    }
    .arrow-icon-rotate {
      transform: rotate(180deg);
    }
    .navbar-submenu {
      display: none;
    }
    .show-navbar-submenu {
      display: block;
    }
  }
}
</style>
