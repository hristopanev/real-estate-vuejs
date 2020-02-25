/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import config from '@/config/config';
const authString = btoa(`${config.appKey}:${config.appSecret}`);


// eslint-disable-next-line no-unused-vars
const loginUser = user => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('authtoken', user.authtoken);

    return user;
};

export const authService = {
    data() {
        return {
            authToken: localStorage.getItem('authtoken')
        }
    },
    computed: {
        isAuthenticated() {
            return this.authToken !== null;
        }
    },
  created() {
    this.$root.$on('logged-in', (authtoken) => this.authToken = authtoken)
    // eslint-disable-next-line no-unused-vars
    this.$root.$on("logged-out", (authToken) =>  this.authToken = null);
  }
}

export const authenticate = {
    methods: {
        // eslint-disable-next-line no-unused-vars
        register(username, password, email) {
            return this.$http.post(`/user/${config.appKey}`, {
                username,
                password,
                email
            // eslint-disable-next-line no-unused-vars
            }).then( ({data}) => loginUser({
                username: data.username,
                authtoken: data._kmd.authtoken
            }));
        },

        login(username, password) {
            return this.$http.post(`user/${config.appKey}/login`, {
                username,
                password,
            }).then(({data})  => loginUser({
                username: data.username,
                authtoken: data._kmd.authtoken
            }));
        }
    },

    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`;
    }
};
