/* eslint-disable */
export const GET_ALL_ADS = 'GET_ALL_ADS';
export const ADD_AD = 'ADD_AD';

export const getAllAds = ads => ({
        type: GET_ALL_ADS,
        ads
});

export const createAd = ad => ({
    type: ADD_AD,
    ad
});

export default {
    [GET_ALL_ADS] (state, payload) {
    state.ads = payload.ads;
    },
    [ADD_AD] (state, payload) {
        state.ads.push(payload.ad);
    } 
}