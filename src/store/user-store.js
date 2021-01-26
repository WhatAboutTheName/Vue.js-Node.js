import { createStore } from 'vuex';

const userStore = createStore({
  state() {
    return {
      name: '',
      isLogin: false,
      isAdmin: false,
      email: '',
      phoneNumber: ''
    }
  },
  getters: {
    isAuth: state => {
      return state.isLogin;
    },
    isAdmin: state => {
      return state.isAdmin;
    }
  }
})

export default userStore;
