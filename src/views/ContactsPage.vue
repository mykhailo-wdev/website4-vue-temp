<template>
  <sub-header :pageTitle="pageTitle"></sub-header>
  <section class="contacts-wrap">
    <div class="container">
      <div class="contacts-panel">
        <div class="contacts-form">
            <form 
              class="form-group" 
              method="POST" 
              v-if="!isFormSubmitted" 
              @submit.prevent="submitForm">
              <label for="name">Name:</label>
              <input 
                class="data-info" 
                type="text" 
                id="name" 
                required 
                placeholder="Enter your name"
                v-model="fullName" 
                >
              <label for="email">Email:</label>
              <input 
                class="data-info" 
                type="email" 
                id="email" 
                required 
                placeholder="Enter your email"
                v-model="email" 
                >
              <label for="phone">Phone:</label>
              <vue-tel-input :modelValue="phone" 
                              @input="onPhoneNumberInput"
                              mode="international" 
                              type="phone" 
                              id="phone" 
                              required
                              placeholder="Enter your phone"
                              >
              </vue-tel-input>
              <label for="message">Message:</label>
              <textarea 
                row="5" 
                class="data-info" 
                id="message" 
                placeholder="Enter your message"
                v-model="message"
                ></textarea>
              <button type="submit" class="data-submit">Submit</button>
            </form>
            <div v-else>
              <div class="progress-bar" v-if="isLoading">Loading...</div>
                <p v-if="isSuccess">Message sent successfully!</p>
                <p v-else>Error sending message. Please try again later.</p>
            </div>
        </div>
        <div class="contacts-datas">
          <div class="contacts-row">
            <div class="contacts-icon">
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="53" height="53" rx="11" fill="#F2F5F8"/>
                <g clip-path="url(#clip0_291_626)">
                <path d="M38 36.1025V36.85C38 37.155 37.8788 37.4475 37.6632 37.6632C37.4475 37.8788 37.155 38 36.85 38H34.55C29.365 38 24.3924 35.9403 20.7261 32.2739C17.0597 28.6076 15 23.635 15 18.45L15 16.15C15 15.845 15.1212 15.5525 15.3368 15.3368C15.5525 15.1212 15.845 15 16.15 15H20.75C21.055 15 21.3475 15.1212 21.5632 15.3368C21.7788 15.5525 21.9 15.845 21.9 16.15V20.75C21.9 21.394 21.5435 22.2565 21.095 22.705L18.634 25.166C20.382 29.306 23.694 32.618 27.834 34.366L30.272 31.928C30.732 31.468 31.5945 31.1115 32.227 31.1115H36.85C37.153 31.1145 37.4426 31.237 37.6557 31.4524C37.8689 31.6677 37.9885 31.9585 37.9885 32.2615V36.114L38 36.1025Z" fill="#13B3F0"/>
                </g>
                <defs>
                <clipPath id="clip0_291_626">
                <rect width="23" height="23" fill="white" transform="translate(15 15)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="contacts-info">
              <p class="contacts-heading">Phone</p>
              <a :href="'tel:' + companyPhone" class="contacts-description">{{ companyPhone }}</a>
            </div>
          </div>
          <div class="contacts-row">
            <div class="contacts-icon">
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="53" height="53" rx="11" fill="#F2F5F8"/>
                <g clip-path="url(#clip0_295_179)">
                <path d="M26.5 15C21.262 15 17.0001 19.1273 17.0001 24.1943C16.9657 31.606 26.139 37.7516 26.5 38C26.5 38 36.0343 31.606 35.9999 24.2C35.9999 19.1274 31.738 15 26.5 15ZM26.5 28.8C23.8757 28.8 21.75 26.7415 21.75 24.2C21.75 21.6585 23.8757 19.6 26.5 19.6C29.1243 19.6 31.25 21.6585 31.25 24.2C31.25 26.7415 29.1243 28.8 26.5 28.8Z" fill="#13B3F0"/>
                </g>
                <defs>
                <clipPath id="clip0_295_179">
                <rect width="23" height="23" fill="white" transform="translate(15 15)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="contacts-info">
              <p class="contacts-heading">Location</p>
              <p class="contacts-description">{{ companyAddress }}</p>
            </div>
          </div>
          <div class="contacts-row">
            <div class="contacts-icon">
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="53" height="53" rx="11" fill="#F2F5F8"/>
                <g clip-path="url(#clip0_295_2)">
                <path d="M38 22V32.6306C38 33.49 37.6638 34.317 37.0601 34.9423C36.4564 35.5676 35.6309 35.944 34.7524 35.9944L34.55 36H18.45C17.57 36 16.7233 35.6717 16.083 35.0821C15.4427 34.4925 15.0574 33.6862 15.0058 32.8282L15 32.6306V22L25.8617 29.0724L25.9951 29.1466C26.1524 29.2216 26.325 29.2606 26.5 29.2606C26.675 29.2606 26.8476 29.2216 27.0048 29.1466L27.1383 29.0724L38 22Z" fill="#13B3F0"/>
                <path d="M34.0586 18C35.3019 18 36.3922 18.6579 37 19.6472L26 27L15 19.6472C15.2886 19.1771 15.6852 18.7831 16.1566 18.4979C16.6281 18.2128 17.1607 18.0449 17.71 18.0081L17.9414 18H34.0586Z" fill="#13B3F0"/>
                </g>
                <defs>
                <clipPath id="clip0_295_2">
                <rect width="23" height="23" fill="white" transform="translate(15 15)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="contacts-info">
              <p class="contacts-heading">E-mail</p>
              <a :href="'mailto:' + companyEmail" class="contacts-description">{{ companyEmail }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-section></footer-section>
</template>

<script>
import axios from 'axios';
import SubHeader from '@/components/part-template/SubHeader.vue';
import { VueTelInput } from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';
import { abstractField } from 'vue-form-generator';
import { mapState, mapMutations } from 'vuex';
export default {
  mixins: [abstractField],
  data () {
    return {
      pageTitle: 'Contacts',
      fullName: '',
      email: '',
      phone: '',
      message: '',
      isFormSubmitted: false,
      isSuccess: false,
      isLoading: false
    }
  },
  computed: {
    ...mapState(['companyAddress', 'companyPhone', 'companyEmail'])
  },
  methods: {
    ...mapMutations(['updateData']),
    async submitForm() {
      try {
        this.isLoading = true;
        const telegramMessage = `Name: ${this.fullName}\nEmail: ${this.email}\nPhone: ${this.phone}\nMessage: ${this.message}`;
        await axios.post(`https://api.telegram.org/enterbot_data/sendMessage`, {
          chat_id: 'enter chat id',
          text: telegramMessage
        });
        
        this.fullName = '';
        this.email = '';
        this.phone = '';
        this.message = '';
        this.isSuccess = true;

        setTimeout(() => {
          this.isFormSubmitted = false;
        }, 3000);


      } catch (error) {
        console.error('Error sending message:', error);
        this.isSuccess = false;
      } finally {
        this.isLoading = false;
        this.isFormSubmitted = true;
      }
    },
    onPhoneNumberInput(event) {
      if (event && event.target && 'value' in event.target) {
        const phoneNumber = event.target.value;
        this.phone = phoneNumber;
    }
  }
},
  components: { SubHeader, VueTelInput }
}
</script>

<style lang="scss">
.contacts-wrap{
  margin: $m-space-132 0;
}
.contacts-panel{
  @include flex-top-element;
}
.contacts-form, .contacts-datas{
  flex: 0 0 45%;
}
.contacts-form{
  display: flex;
  flex-direction: column;
}
.data-info{
  display: inline-block;
  width: 100%;
  text-align: left;
  border: 1px solid #bbb;
  outline: none;
  height: 33px;
  line-height: 33px;
  text-indent: 8px;
  margin-bottom: $m-space-16;
  &:focus-within {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    border: 1px solid #66afe9;
  }
  &:focus {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    border: 1px solid #66afe9;
  }
  &:active {
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    border: 1px solid #66afe9;
  }
}
.vue-tel-input{
  margin-bottom: $m-space-16;
}
.form-group{
  text-align: left;
  @include text-main;
  & > label{
    margin: 0 0 8px 8px;
  } 
}
.data-info{
  @include text-main;
  resize: vertical;
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus::-moz-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder {
    color: transparent;
  }
}
.data-submit{
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
  border: none;
  &:hover {
    transition: $transition-extra;
    background: $btn-bg;
    color: $color-white;
  }
}
.contacts-datas{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.contacts-row{
  @include flex-center-element;
  margin: $m-space-16;
}
.contacts-info{
  padding-left: 16px;
  text-align: left;
}
.contacts-heading, .contacts-description{
  @include text-main;
}
.contacts-description{
  text-decoration: none;
}
.progress-bar {
  width: 100px; 
  height: 20px; 
  background-color: #f0f0f0;
  position: relative;
}

.progress-bar::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: #007bff;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  animation: progress-animation 3s linear forwards; 
}

@keyframes progress-animation {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
@media (max-width: 768px) {
  .contacts-panel{
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: $m-space-40;
  }
  .contacts-form, .contacts-datas{
    flex: 0 0 100%; 
  }
}
</style>