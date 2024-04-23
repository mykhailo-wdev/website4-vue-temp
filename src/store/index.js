import { createStore } from "vuex";

export default createStore({
  state: {
    companyName: '[company_name]',
    companyAddress: '[company_address]',
    companyPhone: '[company_phone]',
    companyPhone2: '[company_phone2]',
    companyEmail: '[company_email]',
    companyRegisterNumber: '[register_number]',
    companyWebSite: '[company_website]',
    companyCountry: '[company_country]',
    activeTab: localStorage.getItem('activeTab') || 'legal'
  },
  mutations: {
    updateData(state, newData) {
      state.companyName = newData.companyName;
      state.companyAddress = newData.companyAddress;
      state.companyPhone = newData.companyPhone;
      state.companyPhone2 = newData.companyPhone2;
      state.companyEmail = newData.companyEmail;
      state.companyRegisterNumber = newData.companyRegisterNumber;
      state.companyWebSite = newData.companyWebSite;
    },
    setActiveTab(state, tabName) {
      state.activeTab = tabName;
      localStorage.setItem('activeTab', tabName); 
    }
  },
  actions: {
    updateActiveTab({ commit }, tabName) {
      commit('setActiveTab', tabName);
    }
  }
});
