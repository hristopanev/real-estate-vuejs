/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import axios from 'axios'


export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {
            }
        });
    }
}


      