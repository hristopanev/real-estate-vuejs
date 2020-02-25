/* eslint-disable */
import { getAllAds, createAd } from '@/ads/adMutations'
import config from '@/config/config'
const getAuthToken= () => localStorage.getItem('authtoken');

/* GET USERNAME */
const username = localStorage.getItem("username");
/* GET USERNAME */

export default {
    getAll(context)  {
        fetch(`https://baas.kinvey.com/appdata/${config.appKey}/ads`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Kinvey ${getAuthToken()}`
            }
        }).then(res => res.json())
        .then(data => context.commit(getAllAds(data)));
    },
    getSearch(context, city)  {
        fetch(`https://baas.kinvey.com/appdata/${config.appKey}/ads`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Kinvey ${getAuthToken()}`
            }
        }).then(res => res.json())
        .then(function(data) {
            return data.filter(ad => {
            return ad.city.toLowerCase() === city.toLowerCase()
            })             
        })
        .then(data => context.commit(getAllAds(data)));
    },
    getProfile(context)  {
        fetch(`https://baas.kinvey.com/appdata/${config.appKey}/ads`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Kinvey ${getAuthToken()}`
            }
        }).then(res => res.json())
        .then(function(data) {
            return data.filter(ad => {
            return ad.user === username
            })             
        })
        .then(data => context.commit(getAllAds(data)));
    },
    create(context, data) {
        return fetch(`https://baas.kinvey.com/appdata/${config.appKey}/ads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Kinvey ${getAuthToken()}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(dataRes => context.commit(createAd(dataRes)));
    },
    //appSecret
    deleteAd(context, ad) {
        return fetch(`https://baas.kinvey.com/appdata/${config.appSecret}/ads/${ad._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Kinvey ${getAuthToken()}`
            }.then(console.log(ad._id))
        });
    },

}