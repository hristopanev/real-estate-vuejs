/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import config from '../config/config'

/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
const getAuthToken= () => localStorage.getItem('authtoken');

export const adService = {
    data() {
        return {
            ads: []
        };
    },
        created() {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`;
            return this.$http.get(`appdata/${config.appKey}/ads`)
            .then(({data}) => this.ads = data)
        }
    
}