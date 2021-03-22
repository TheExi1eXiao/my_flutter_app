import Vuex from 'vuex';

import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

import store from '@/store';

import { setSto, getSto } from '@/utils/storage'

const isLogin = getSto("isLogin") || false;

const userInfo = getSto("userInfo") || {};

@Module({ name: 'app', dynamic: true, namescoped: true, store })
class App extends VuexModule {

    isLogin = isLogin;

    userInfo = userInfo;

    @Mutation
    SET_ISLOGIN(data) {
        setSto("isLogin", data);
        this.isLogin = data;
    }

    @Mutation
    SET_USERINFO(data) {
        setSto("userInfo", data);
        this.userInfo = data;
    }

    @Action
    set_isLogin(data) {
        this.SET_ISLOGIN(data);
    }

    @Action
    setUserInfo(data) {
        this.SET_USERINFO(data);
    }

}

const appStore = getModule(App);
export default appStore;