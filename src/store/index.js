import { createStore } from "vuex";
import login from './modules/login.js';
export const store = createStore({
  modules:{
    login
  }
});