import store from '../store'
import router from "@/router";
import api from '../api'

export default class AuthService {
    static restore_authorization () {
        let username = localStorage.getItem('username')
        let access_token = localStorage.getItem('access_token')
        if (access_token) {
             store.dispatch('auth/login', {access_token: access_token, username: username})
            store.dispatch('notification/open', {msg: 'Ваша сессия востановлена', timeout: 3000})
        } else {
             store.dispatch('auth/logout')
        }
    }
    static authorization (credentials) {
        store.dispatch('auth/login_request')
        return api.login(credentials.email, credentials.password)
            .then(resp => {
                const access_token = resp.data.access_token;
                const username = resp.data.username;
                localStorage.setItem('username', username);
                localStorage.setItem('access_token', access_token);
                store.dispatch('auth/login', {username: username})
                router.push('/');
            })
            .catch((err) => {
                store.dispatch('auth/login_error')
                localStorage.removeItem('access_token');
                throw err.data.msg
            })
    }

    static registration (credentials) {
        return api.registration(credentials.email, credentials.name, credentials.password).then((resp) => {
            if (resp.data.success) {
                router.push('/login');
            } else {
                throw resp.data.msg
            }
        }).catch((err) => {
            throw err.data.msg
        });
    }

    static logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        store.dispatch('auth/logout');
        store.dispatch('notification/open', {msg: 'Вы покинули сессию', timeout: 3000})
        router.push('/login');
    }
}