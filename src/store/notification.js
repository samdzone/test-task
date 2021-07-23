const notification = {
    namespaced: true,
    state: () => ({
        snackbar: false,
        timeout: -1,
        msg: ''
    }),
    mutations: {
        open_snackbar(state, data){
            state.snackbar = true;
            state.timeout = data.timeout;
            state.msg = data.msg;
        },
        close_snackbar(state){
            state.snackbar = false;
            state.timeout = 0;
            state.msg = '';
        },
    },
    actions: {
        open({commit}, data){
            commit('open_snackbar', data);
        },
        close({commit}){
            commit('close_snackbar');
        },
    },
    getters: {
        getSnackbar: (state) => !!state.snackbar,
        getTimeout: (state) => state.timeout,
        getMsg: (state) => state.msg
    }
}

export default notification