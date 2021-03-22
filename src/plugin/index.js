import Vue from 'vue'

import { WebPage, MoreList } from '@/components'

import { 
    time2HHmm,
    time2day,
} from './filter'

Vue.component('web-page', WebPage);
Vue.component('more-list', MoreList);


Vue.filter("time2HHmm", time2HHmm);
Vue.filter("time2day", time2day);

import './vant'