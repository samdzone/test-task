const auth = {
    namespaced: true,
    state: () => ({
        status: '',
        username: '',
    }),
    mutations: {
        auth_request(state){
            state.status = 'loading';
        },
        auth_success(state, credentials) {
            state.status = 'success';
            state.username = credentials.username;
        },
        auth_error(state){
            state.status = 'error';
        },
        logout(state){
            state.status = '';
            state.username = '';
        },
    },
    actions: {
        login_request({commit}){
            commit('auth_request');
        },
        login_error({commit}) {
            commit('auth_error')
        },
        login({commit}, user){
            commit('auth_success', user);
        },
        logout({commit}) {
            commit('logout');
        },
    },
    getters: {
        isLoggedIn: (state) => state.status === 'success',
        getUsername: (state) => state.username
    }
}

export default auth