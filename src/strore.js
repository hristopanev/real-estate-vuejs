/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import adMutations from '@/ads/adMutations' 
import adActions from '@/ads/adActions'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ads: []
    },
    getters: {
        getAllAds: state => state.ads,
        getOneAd: state => id => state.ads.find(x => x._id === id),
        getResult: state => city => state.ads.find(x => x.city === city)
    },
    mutations: adMutations,
    actions: adActions
})