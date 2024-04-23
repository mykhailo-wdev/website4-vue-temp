<template>
  <header-section></header-section>
  <!-- start info -->
  <section class="info">
    <div class="container">
      <div class="info-row">
        <div class="info-text">
          <p class="info-preheading">{{$t('info.infopreheading')}}</p>
          <h1 class="info-heading">
            {{$t('info.infoheading')}} 
            <span class="text-color">{{$t('info.textcolor')}}</span>
          </h1>
          <p class="info-subheading">{{$t('info.infosubheading')}}</p>
          <div class="info-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
        <div class="info-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/mockup@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/mockup@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/mockup@1x.png"
              srcset="../assets/images/home/mockup@2x.png 2x"
              alt="tradein platform Brand name">
          </picture>
        </div>
      </div>
    </div>
  </section>
  <!-- end info -->
  

  <!-- start work -->
  <section class="work">
    <div class="container">
      <div class="work-text">
        <p class="work-preheading">{{$t('work.workpreheading')}}</p>
        <h2 class="work-heading">{{$t('work.workheading')}}</h2>
      </div>
      <div class="work-row">
        <div class="work-head">
          <p class="work-num">01</p>
          <p class="work-title">{{$t('work.worktitle')}}</p>
        </div>
        <div class="work-description">
          <p class="work-subtitle">{{$t('work.worksubtitle')}}</p>
        </div>
        <div class="work-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/support@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/support@2x.webp 2x">
            <img
              src="../assets/images/home/support@1x.png"
              srcset="../assets/images/home/support@2x.png 2x"
              alt="support">
          </picture>
        </div>
      </div>
      <div class="work-row work-border">
        <div class="work-head">
          <p class="work-num">02</p>
          <p class="work-title">{{$t('work.worktitle2')}}</p>
        </div>
        <div class="work-description">
          <p class="work-subtitle">{{$t('work.worksubtitle2')}}</p>
        </div>
        <div class="work-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/the_best_trading@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/the_best_trading@2x.webp 2x">
            <img
              src="../assets/images/home/the_best_trading@1x.png"
              srcset="../assets/images/home/the_best_trading@2x.png 2x"
              alt="the_best_trading">
          </picture>
        </div>
      </div>
      <div class="work-row">
        <div class="work-head">
          <p class="work-num">03</p>
          <p class="work-title">{{$t('work.worktitle3')}}</p>
        </div>
        <div class="work-description">
          <p class="work-subtitle">{{$t('work.worksubtitle3')}}</p>
        </div>
        <div class="work-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/global@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/global@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/global@1x.png"
              srcset="../assets/images/home/global@2x.png 2x"
              alt="global">
          </picture>
        </div>
      </div>
    </div>
  </section>
  <!-- end work -->

  <!-- start ttrader -->
  <section class="ttrader">
    <div class="container">
      <div class="ttrader-text">
        <p class="ttrader-preheading">{{$t('ttrader.ttraderpreheading')}}</p>
        <h2 class="ttrader-heading">{{$t('ttrader.ttraderheading')}}</h2>
      </div>
      <div class="ttrader-row">
        <div class="ttrader-market">
          <div class="ttrader-list">
            <div class="ttrader-item">
              <p class="ttrader-small">{{$t('ttrader.ttradersmall')}}</p>
            </div>
            <div class="ttrader-item">
              <div class="ttrader-line">
                <div class="ttrader-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M27.545 3.63895C27.6891 3.79748 27.8036 3.98608 27.8817 4.19388C27.9598 4.40168 28 4.62457 28 4.84968C28 5.07479 27.9598 5.29768 27.8817 5.50548C27.8036 5.71328 27.6891 5.90188 27.545 6.06041L19.8531 14.5867C19.7101 14.7465 19.54 14.8733 19.3525 14.9599C19.165 15.0465 18.964 15.0911 18.7609 15.0911C18.5578 15.0911 18.3567 15.0465 18.1692 14.9599C17.9818 14.8733 17.8116 14.7465 17.6686 14.5867L9.97679 6.06041C9.8326 5.90188 9.71815 5.71328 9.64005 5.50548C9.56195 5.29768 9.52174 5.07479 9.52174 4.84968C9.52174 4.62457 9.56195 4.40168 9.64005 4.19388C9.71815 3.98608 9.8326 3.79748 9.97679 3.63895C10.1198 3.47912 10.2899 3.35226 10.4774 3.26569C10.6649 3.17912 10.8659 3.13454 11.069 3.13454C11.2721 3.13454 11.4732 3.17912 11.6606 3.26569C11.8481 3.35226 12.0183 3.47912 12.1613 3.63895L18.7609 10.9715L25.3605 3.63895C25.5035 3.47912 25.6736 3.35226 25.8611 3.26569C26.0486 3.17912 26.2496 3.13454 26.4527 3.13454C26.6558 3.13454 26.8569 3.17912 27.0443 3.26569C27.2318 3.35226 27.4019 3.47912 27.545 3.63895Z" fill="#0267BB"/>
                    <path d="M21.026 24.3877L13.3331 16.6366C13.1901 16.4913 13.0199 16.376 12.8324 16.2973C12.6449 16.2186 12.4438 16.178 12.2407 16.178C12.0376 16.178 11.8365 16.2186 11.649 16.2973C11.4615 16.376 11.2913 16.4913 11.1483 16.6366L3.45537 24.3877C3.31116 24.5318 3.1967 24.7033 3.11858 24.8922C3.04047 25.0811 3.00026 25.2837 3.00026 25.4884C3.00026 25.693 3.04047 25.8957 3.11858 26.0846C3.1967 26.2735 3.31116 26.4449 3.45537 26.5891C3.5984 26.7344 3.76857 26.8497 3.95606 26.9284C4.14355 27.0071 4.34465 27.0476 4.54776 27.0476C4.75088 27.0476 4.95198 27.0071 5.13947 26.9284C5.32696 26.8497 5.49713 26.7344 5.64016 26.5891L12.2407 19.9231L18.8412 26.5891C19.131 26.881 19.5239 27.045 19.9336 27.045C20.1365 27.045 20.3374 27.0047 20.5248 26.9265C20.7123 26.8483 20.8826 26.7336 21.026 26.5891C21.3158 26.2971 21.4785 25.9012 21.4785 25.4884C21.4785 25.284 21.4386 25.0816 21.3609 24.8927C21.2833 24.7039 21.1695 24.5323 21.026 24.3877Z" fill="#0267BB"/>
                  </svg>
                </div>
                <div class="ttrader-info">
                  <p class="ttrader-big">{{$t('ttrader.ttraderbig')}}</p>
                  <p class="ttrader-small">{{$t('ttrader.ttradersmall2')}}</p>
                </div>
              </div>
            </div>
            <div class="ttrader-item">
              <div class="ttrader-line">
                <div class="ttrader-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M8.75 20.1345C9.24728 20.1345 9.72419 19.937 10.0758 19.5853C10.4275 19.2337 10.625 18.7568 10.625 18.2595C10.6311 18.1972 10.6311 18.1344 10.625 18.072L14.1125 14.5845H14.6875L16.7 16.597V16.697C16.7 17.1943 16.8975 17.6712 17.2492 18.0228C17.6008 18.3745 18.0777 18.572 18.575 18.572C19.0723 18.572 19.5492 18.3745 19.9008 18.0228C20.2525 17.6712 20.45 17.1943 20.45 16.697V16.597L25 12.0095C25.3708 12.0095 25.7334 11.8996 26.0417 11.6935C26.35 11.4875 26.5904 11.1947 26.7323 10.8521C26.8742 10.5094 26.9113 10.1324 26.839 9.76873C26.7666 9.40501 26.588 9.07092 26.3258 8.8087C26.0636 8.54647 25.7295 8.3679 25.3658 8.29555C25.0021 8.2232 24.6251 8.26033 24.2825 8.40225C23.9399 8.54416 23.647 8.78448 23.441 9.09283C23.235 9.40117 23.125 9.76368 23.125 10.1345C23.1189 10.1969 23.1189 10.2597 23.125 10.322L18.6125 14.8345H18.4125L16.25 12.6345C16.25 12.1372 16.0525 11.6603 15.7008 11.3087C15.3492 10.9571 14.8723 10.7595 14.375 10.7595C13.8777 10.7595 13.4008 10.9571 13.0492 11.3087C12.6975 11.6603 12.5 12.1372 12.5 12.6345L8.75 16.3845C8.25272 16.3845 7.77581 16.5821 7.42417 16.9337C7.07254 17.2853 6.875 17.7622 6.875 18.2595C6.875 18.7568 7.07254 19.2337 7.42417 19.5853C7.77581 19.937 8.25272 20.1345 8.75 20.1345ZM25.625 25.1345H4.375V3.88452C4.375 3.553 4.2433 3.23506 4.00888 3.00064C3.77446 2.76622 3.45652 2.63452 3.125 2.63452C2.79348 2.63452 2.47554 2.76622 2.24112 3.00064C2.0067 3.23506 1.875 3.553 1.875 3.88452V26.3845C1.875 26.716 2.0067 27.034 2.24112 27.2684C2.47554 27.5028 2.79348 27.6345 3.125 27.6345H25.625C25.9565 27.6345 26.2745 27.5028 26.5089 27.2684C26.7433 27.034 26.875 26.716 26.875 26.3845C26.875 26.053 26.7433 25.7351 26.5089 25.5006C26.2745 25.2662 25.9565 25.1345 25.625 25.1345Z" fill="#0267BB"/>
                  </svg>
                </div>
                <div class="ttrader-info">
                  <p class="ttrader-big">{{$t('ttrader.ttraderbig2')}}</p>
                  <p class="ttrader-small">{{$t('ttrader.ttradersmall3')}}</p>
                </div>
              </div>
            </div>
            <div class="ttrader-item">
              <div class="ttrader-line">
                <div class="ttrader-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <g clip-path="url(#clip0_743_80)">
                      <path d="M15 0.134521C12.0333 0.134521 9.13319 1.01426 6.66645 2.66248C4.19972 4.3107 2.27713 6.65338 1.14181 9.39427C0.00649932 12.1352 -0.290551 15.1512 0.288227 18.0609C0.867006 20.9706 2.29562 23.6433 4.3934 25.7411C6.49119 27.8389 9.16393 29.2675 12.0736 29.8463C14.9834 30.4251 17.9994 30.128 20.7403 28.9927C23.4811 27.8574 25.8238 25.9348 27.472 23.4681C29.1203 21.0013 30 18.1012 30 15.1345C30 11.1563 28.4196 7.34096 25.6066 4.52792C22.7936 1.71487 18.9782 0.134521 15 0.134521ZM15 27.4072C12.5727 27.4072 10.1999 26.6875 8.18164 25.3389C6.1634 23.9904 4.59038 22.0736 3.66148 19.8311C2.73259 17.5885 2.48955 15.1209 2.9631 12.7402C3.43664 10.3596 4.6055 8.17276 6.32188 6.45639C8.03825 4.74002 10.225 3.57116 12.6057 3.09761C14.9864 2.62406 17.454 2.86711 19.6966 3.796C21.9391 4.72489 23.8559 6.29792 25.2044 8.31616C26.5529 10.3344 27.2727 12.7072 27.2727 15.1345C27.2727 18.3894 25.9797 21.5111 23.6781 23.8126C21.3765 26.1142 18.2549 27.4072 15 27.4072ZM17.7273 8.31634V6.9527C17.7273 6.59104 17.5836 6.2442 17.3279 5.98847C17.0721 5.73273 16.7253 5.58907 16.3636 5.58907C16.002 5.58907 15.6551 5.73273 15.3994 5.98847C15.1437 6.2442 15 6.59104 15 6.9527V8.31634H13.6364V6.9527C13.6364 6.59104 13.4927 6.2442 13.237 5.98847C12.9812 5.73273 12.6344 5.58907 12.2727 5.58907C11.9111 5.58907 11.5642 5.73273 11.3085 5.98847C11.0528 6.2442 10.9091 6.59104 10.9091 6.9527V8.31634H9.54546C9.1838 8.31634 8.83695 8.46001 8.58122 8.71574C8.32549 8.97147 8.18182 9.31832 8.18182 9.67997C8.18182 10.0416 8.32549 10.3885 8.58122 10.6442C8.83695 10.8999 9.1838 11.0436 9.54546 11.0436H10.9091V19.2254H9.54546C9.1838 19.2254 8.83695 19.3691 8.58122 19.6248C8.32549 19.8806 8.18182 20.2274 8.18182 20.5891C8.18182 20.9507 8.32549 21.2976 8.58122 21.5533C8.83695 21.809 9.1838 21.9527 9.54546 21.9527H10.9091V23.3163C10.9091 23.678 11.0528 24.0248 11.3085 24.2806C11.5642 24.5363 11.9111 24.68 12.2727 24.68C12.6344 24.68 12.9812 24.5363 13.237 24.2806C13.4927 24.0248 13.6364 23.678 13.6364 23.3163V21.9527H15V23.3163C15 23.678 15.1437 24.0248 15.3994 24.2806C15.6551 24.5363 16.002 24.68 16.3636 24.68C16.7253 24.68 17.0721 24.5363 17.3279 24.2806C17.5836 24.0248 17.7273 23.678 17.7273 23.3163V21.9527C18.8123 21.9527 19.8528 21.5217 20.62 20.7545C21.3872 19.9873 21.8182 18.9468 21.8182 17.8618C21.8159 16.8544 21.442 15.8833 20.7682 15.1345C21.442 14.3857 21.8159 13.4146 21.8182 12.4072C21.8182 11.3223 21.3872 10.2817 20.62 9.51454C19.8528 8.74734 18.8123 8.31634 17.7273 8.31634ZM17.7273 19.2254H13.6364V16.4982H17.7273C18.0889 16.4982 18.4358 16.6418 18.6915 16.8976C18.9472 17.1533 19.0909 17.5001 19.0909 17.8618C19.0909 18.2234 18.9472 18.5703 18.6915 18.826C18.4358 19.0818 18.0889 19.2254 17.7273 19.2254ZM17.7273 13.7709H13.6364V11.0436H17.7273C18.0889 11.0436 18.4358 11.1873 18.6915 11.443C18.9472 11.6987 19.0909 12.0456 19.0909 12.4072C19.0909 12.7689 18.9472 13.1158 18.6915 13.3715C18.4358 13.6272 18.0889 13.7709 17.7273 13.7709Z" fill="#065BD0" stroke="#F2F5F8" stroke-width="0.5"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_743_80">
                        <rect width="30" height="30" fill="white" transform="translate(0 0.134521)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="ttrader-info">
                  <p class="ttrader-big">{{$t('ttrader.ttraderbig3')}}</p>
                  <p class="ttrader-small">{{$t('ttrader.ttradersmall4')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ttrader-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/happy_man@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/happy_man@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/happy_man@1x.png"
              srcset="../assets/images/home/happy_man@2x.png 2x"
              alt="happy man trade with Brand name">
          </picture>
        </div>
      </div>
    </div>
  </section>
  <!-- end ttrader -->

  <!-- start technology -->
  <section class="technology">
    <div class="container">
      <div class="technology-row">
        <div class="technology-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/light_theme@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/light_theme@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/light_theme@1x.png"
              srcset="../assets/images/home/light_theme@2x.png 2x"
              alt="mobile tradin platform Brand name">
          </picture>
        </div>
        <div class="technology-text">
          <p class="technology-preheading">{{$t('technology.technologypreheading')}}</p>
          <h2 class="technology-heading">{{$t('technology.technologyheading')}}</h2>
          <p class="technology-subheading">{{$t('technology.technologysubheading')}}</p>
          <div class="technology-advantages">
            <div class="advantages-list">
              <div class="advantages-item">
                <p class="advantages-heading" @click="toggleContent('trading')">
                  {{$t('technology.advantagesheading')}}
                  <span class="advantages-icon" :class="{ 'active': isToolActive.trading }"></span>
                </p>
                <p :class="{ 'advantages-subheading' : isToolActive.trading }" v-if="isToolActive.trading">
                  {{$t('technology.advantagessubheading')}}
                </p>
              </div>
              <div class="advantages-item">
                <p class="advantages-heading" @click="toggleContent('charting')">
                  {{$t('technology.advantagesheading2')}}
                  <span class="advantages-icon" :class="{ 'active': isToolActive.charting }"></span>
                </p>
                <p :class="{ 'advantages-subheading' : isToolActive.charting }" v-if="isToolActive.charting">
                  {{$t('technology.advantagessubheading2')}}
                </p>
              </div>
              <div class="advantages-item">
                <p class="advantages-heading" @click="toggleContent('notifications')">
                  {{$t('technology.advantagesheading3')}}
                  <span class="advantages-icon" :class="{ 'active': isToolActive.notifications }"></span>
                </p>
                <p :class="{ 'advantages-subheading' : isToolActive.notifications }" v-if="isToolActive.notifications">
                  {{$t('technology.advantagessubheading3')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end technology -->

  <!-- start tplatform -->
  <section class="tplatform">
    <div class="container">
      <div class="tplatform-text">
        <p class="tplatform-preheading">{{$t('tplatform.tplatformpreheading')}}</p>
        <h2 class="tplatform-heading">{{$t('tplatform.tplatformheading')}}</h2>
      </div>
      <div class="tplatform-row">
        <div class="tplatform-list tplatform-left">
          <div class="tplatform-item">
            <p class="tplatform-big">01</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall')}}</p>
          </div>
          <div class="tplatform-item">
            <p class="tplatform-big">02</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall2')}}</p>
          </div>
          <div class="tplatform-item">
            <p class="tplatform-big">03</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall3')}}</p>
          </div>
        </div>
        <div class="tplatform-picture" id="tplatform-order">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/dark_theme@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/dark_theme@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/dark_theme@1x.png"
              srcset="../assets/images/home/dark_theme@2x.png 2x"
              alt="dark theme trading platform Brand name">
          </picture>
        </div>
        <div class="tplatform-list tplatform-right">
          <div class="tplatform-item">
            <p class="tplatform-big">04</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall4')}}</p>
          </div>
          <div class="tplatform-item">
            <p class="tplatform-big">05</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall5')}}</p>
          </div>
          <div class="tplatform-item">
            <p class="tplatform-big">06</p>
            <p class="tplatform-small">{{$t('tplatform.tplatformsmall6')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end tplatform -->

  <!-- start learn -->
  <section class="learn">
    <div class="container">
      <div class="learn-row">
        <div class="learn-text">
          <p class="learn-preheading">{{$t('learn.learnpreheading')}}</p>
          <h2 class="learn-heading">{{$t('learn.learnheading')}}</h2>
          <div class="learn-list">
            <p class="learn-item">{{$t('learn.learnitem')}}</p>
            <p class="learn-item">{{$t('learn.learnitem2')}}</p>
          </div>
          <div class="learn-btn">
            <open-account-btn></open-account-btn>
          </div>
        </div>
        <div class="learn-picture">
          <picture>
            <source type="image/avif" srcset="../assets/images/home/happy_girl@2x.avif 2x">
            <source type="image/webp" srcset="../assets/images/home/happy_girl@2x.webp 2x">
            <img class="thumbnail"
              src="../assets/images/home/happy_girl@1x.png"
              srcset="../assets/images/home/happy_girl@2x.png 2x"
              alt="happy girl trade with Brand name">
          </picture>
        </div>
      </div>
    </div>
  </section>
  <!-- end learn --> 
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue';
import OpenAccountBtn from '@/components/buttons/OpenAccountBtn.vue';
import MobileLoginAccBtn from '@/components/buttons/MobileLoginAccBtn.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
  export default  {
    data () {
      return {
        isToolActive: {
          trading: false,
          charting: false,
          notifications: false
        },
        previousActive: null
      }
    },
    methods: {
      toggleContent(section) {
        if (this.previousActive && this.previousActive !== section) {
          this.isToolActive[this.previousActive] = false;
        }
        this.isToolActive[section] = !this.isToolActive[section];
        this.previousActive = this.isToolActive[section] ? section : null;
      }
    },
    components:  {  HeaderSection, 
                    OpenAccountBtn, 
                    FooterSection,
                    MobileLoginAccBtn
                  },
    created () {
      this.isToolActive.trading = true;
      this.previousActive = 'trading';
    }
  }
</script>

<style lang="scss">
.info {
  margin-top: 148px;
  padding-bottom: $m-space-70;
  .info-row {
    @include flex-center-element;
  }
  .info-text {
    flex: 0 0 39%;
    text-align: left;
  }
  .info-picture {
    flex: 0 0 57%;
  }
  .info-preheading {
   @include text-big-upper; 
  }
  .info-heading {
    @include text-h1;
  }
  .info-subheading {
    @include text-main;
    margin-top: $m-space-32;
    display: inline-block;
    max-width: 440px;
  }
  .info-btn {
    margin-top: $m-space-64;
  }
}
.work {
  margin-top: $m-space-112;
  padding-bottom: $m-space-80;
  .work-text {
    display: block;
    width: 60%;
    margin: 0 auto $m-space-80;
    text-align: center;
  }
  .work-preheading {
    @include text-big-upper; 
  }
  .work-heading {
    @include text-h2;
    margin-top: $m-space-16;
  }
  .work-row {
    @include flex-center-element;
    padding: $m-space-48 0;
    &:last-child {
      padding: $m-space-48 0 0;
    }
  }
  .work-border {
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }
  .work-head {
    flex: 0 0 26%;
    @include flex-center-element;
    justify-content: flex-start;
  }
  .work-description {
    flex: 0 0 35%;
  }
  .work-picture {
    flex: 0 0 26%;
  }
  .work-num {
    font-family: $font-family-m;
    font-size: $h1-title;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.92px;
    color: $light-blue;
    text-transform: uppercase;
    display: inline-block;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    text-align: left;
  }
  .work-title {
    padding-left: $m-space-48;
    @include text-big;
    text-align: left;
  }
  .work-subtitle {
    @include text-main;
    text-align: left;
  }
}
.ttrader {
  margin-top: $m-space-112;
  padding-bottom: $m-space-80;
  .ttrader-text {
    display: block;
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .ttrader-preheading {
    @include text-big-upper; 
  }
  .ttrader-heading {
    @include text-h2;
    margin-top: $m-space-16;
  }
  .ttrader-row {
    @include flex-center-element;
    align-items: flex-end;
    margin-top: $m-space-80;
  }
  .ttrader-market {
    flex: 0 0 60%;
  }
  .ttrader-picture {
    flex: 0 0 33%;
  }
  .ttrader-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: $m-space-32;
  }
  .ttrader-item {
    &:nth-child(1) {
      padding: $m-space-16 0;
    }
    &:nth-child(2), &:nth-child(3), &:nth-child(4)  {
      background: #f2f5f8;
      padding: $m-space-40;
      border-radius: $border-radius-44;
    }
  }
  .ttrader-line {
    display: flex;
  }
  .ttrader-big {
    @include text-strong;
    text-align: left;
    padding-left: $m-space-24;
  }
  .ttrader-small {
    @include text-main;
    text-align: left;
    padding-left: $m-space-24;
  }
}
.technology {
  margin-top: $m-space-112;
  padding-bottom: $m-space-80;
  .technology-row {
    @include flex-center-element;
  }
  .technology-picture {
    flex: 0 0 35%;
  }
  .technology-text {
    flex: 0 0 50%;
    text-align: left;
  }
  .technology-preheading {
    @include text-big-upper;
    padding: 0 $m-space-24; 
  }
  .technology-heading {
    @include text-h2;
    margin-top: $m-space-16;
    padding: 0 $m-space-24; 
  }
  .technology-subheading {
    @include text-main;
    margin-top: $m-space-40;
    padding: 0 $m-space-24; 
  }
  .advantages-list {
    margin-top: $m-space-32;
  }
  .advantages-item {
    background: #f2f5f8;
    padding: $m-space-24 $m-space-40;
    border-radius: $border-radius-44;
    margin-bottom: $m-space-24;
  }
  .advantages-heading {
    @include text-strong;
    @include flex-center-element;
    cursor: pointer;
  }
  .advantages-subheading {
    @include text-main;
    margin-top: $m-space-16;
  }
  .advantages-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../assets/images/home/plus.svg") no-repeat center;
    background-size: contain;
  }
  .advantages-icon.active {
    background: url("../assets/images/home/mines.svg") no-repeat center;
    background-size: contain;
  }
}
.tplatform {
  margin-top: $m-space-112;
  padding-bottom: $m-space-80;
  .tplatform-text {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .tplatform-preheading {
    @include text-big-upper;
  }
  .tplatform-heading {
    @include text-h2;
    margin-top: $m-space-16;
  }
  .tplatform-row {
    margin-top: $m-space-80;
    @include flex-top-element;
    height: 100%;
  }
  .tplatform-list {
    flex: 0 0 20%;
  }
  .tplatform-picture {
    flex: 0 0 36%;
  }
  .tplatform-item {
    background: #f2f5f8;
    padding: $m-space-24 $m-space-40;
    border-radius: $border-radius-44;
    text-align: left;
  }
  .tplatform-left  {
    .tplatform-item {
      margin-bottom: $m-space-40;
    }
  }
  .tplatform-right  {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    .tplatform-item {
      margin-top: $m-space-40;
    }
  }
  .tplatform-big {
    font-family: $font-family-m;
    font-size: $h1-title;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.92px;
    color: $light-blue;
  }
  .tplatform-small {
    @include text-main;
    color: $color-black;
    margin-top: $m-space-16;
  }
}
.learn {
  margin-top: $m-space-112;
  padding-bottom: $m-space-80;
  .learn-row {
    @include flex-center-element;
  }
  .learn-text {
    flex: 0 0 42%;
    text-align: left;
  }
  .learn-picture {
    flex: 0 0 49%;
  }
  .learn-preheading {
    @include text-big-upper;
  }
  .learn-heading {
    @include text-h2;
    margin-top: $m-space-16;
  }
  .learn-list, .learn-btn {
    margin-top: $m-space-48;
  }
  .learn-item {
    @include text-main;
    margin-top: $m-space-24;
  }
}
@media screen and (max-width: 992px) {
.info{
  .info-row{
    flex-direction: column-reverse;
  }
  .info-picture{
    flex: 0 0 100%;
    img{
      max-width: 70%;
      max-height: 70%;
    }
  }
  .info-text{
    flex: 0 0 100%;
    margin-top: $m-space-40;
  }
  .info-subheading{
    max-width: 992px;
  }
}
.work{
  .work-text{
    width: 100%;
    text-align: left;
    margin: 0;
  }
  .work-row{
    flex-wrap: wrap;
    margin-top: 0;
  }
  .work-head{
    flex: 0 0 35%;
    margin-top: $m-space-40;
  }
  .work-description{
    flex: 0 0 60%;
    margin-top: $m-space-40;
  }
  .work-picture{
    flex: 0 0 50%;
    margin-top: $m-space-40;
  }
}
.ttrader{
  .ttrader-text{
    width: 100%;
    text-align: left;
  }
  .ttrader-row{
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 0;
  }
  .ttrader-picture, .ttrader-market{
    margin-top: $m-space-40;
    flex: 0 0 100%;
  }
}
.technology{
  .technology-row{
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
  .technology-picture, .technology-text{
    margin-top: $m-space-40;
    flex: 0 0 100%;
  }
  .technology-subheading{
    margin-top: $m-space-16;
  }
}
.tplatform{
  .tplatform-text{
    width: 100%;
    text-align: left;
  }
  .tplatform-row{
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0;
    gap: $m-space-40;
  }
  #tplatform-order{
    order: -1;
  }
  .tplatform-picture{
    flex: 0 0 100%;
    margin-top: $m-space-40;
    img{
      max-width: 60%;
      max-height: 60%;
    }
  }
  .tplatform-list{
    flex: 0 0 30%;
  }
}
.learn{
  .learn-row{
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .learn-picture{
    flex: 0 0 100%;
    img{
      max-width: 70%;
      max-height: 70%;
    }
  }
  .learn-text{
    flex: 0 0 100%;
    margin-top: $m-space-40;
  }
}
}
@media screen and (max-width: 768px) {
  .info{
    .info-picture img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .work{
    margin-top: $m-space-48;
    .work-head, .work-description, .work-picture{
      flex: 0 0 100%;
      margin-top: 0;
    }
    .work-num{
      writing-mode: horizontal-tb;
      transform: rotate(0);
    }
    .work-title{
      padding-left: 16px;
    }
    .work-description, .work-picture{
      margin-top: $m-space-24;
    }
  }
  .technology{
    margin-top: $m-space-48;
  }
  .ttrader{
    margin-top: $m-space-48;
   .ttrader-list{
    grid-template-columns: 1fr;
   } 
  }
  .tplatform{
    margin-top: $m-space-48;
    .tplatform-picture img{
      max-width: 100%;
      max-height: 100%;
    }
    .tplatform-list{
      flex: 0 0 40%;
    }
  }
  .learn{
    margin-top: $m-space-48;
    .learn-picture img{
      max-width: 100%;
      max-height: 100%;
    }
  }
}
@media screen and (max-width: 500px) {
  .tplatform{
    .tplatform-row{
      gap: 0;
    }
    .tplatform-list{
      flex: 0 0 100%;
    }
    .tplatform-left {
      margin-top: $m-space-40;
    }
    .tplatform-right {
      .tplatform-item{
        margin-top: 0;
        width: 100%;
      }
    }
    .tplatform-item{
      margin-bottom: $m-space-24;
    }
    .tplatform-small{
      margin-top: 0;
    }
  }
}

</style>