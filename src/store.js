import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUserLoggedIn: false
    },
    mutations:{
UPDATE_USERLOGIN:(state, islogin) => {
    state.isUserLoggedIn = islogin;
}
    },
    actions:{

    }
})