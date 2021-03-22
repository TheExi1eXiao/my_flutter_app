import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

import store from '@/store';

import { login } from '@/api'

import { setSto, getSto } from '@/utils/storage'

const isLogin = getSto("isLogin") || false;

const userInfo = getSto("userInfo") || {};

const token = getSto("token") || null;

@Module({ name: 'user', dynamic: true, namescoped: true, store })
class User extends VuexModule {

    isLogin = isLogin;

    userInfo = userInfo;

    token = token;

    @Mutation
    SET_ISLOGIN(data) {
        setSto("isLogin", data);
        this.isLogin = data;
    }

    @Mutation
    SET_TOKEN(data) {
        setSto("token", data);
        this.token = data;
    }

    @Mutation
    SET_USERINFO(data) {
        setSto("userInfo", data);
        this.userInfo = data;
    }

    @Action
    setToken(data) {
        this.SET_TOKEN(data);
    }

    @Action
    async login(params) {
        try {
            const { data } = await login(params);
            this.SET_TOKEN(data.token);
            this.SET_USERINFO(data);
            this.SET_ISLOGIN(true);
        } catch {

        }

    }

}

const userStore = getModule(User);
export default userStore;