export const state = () => ({ 
    auth: false,
    user:{
        username: '',
        password: '',
    },
    users:[
        {id:1, name: 'Alex', password: '123'},
        {id:2, name: 'Marta', password: '312'}
    ],
    popup:false
})

export const mutations = { 
    SET_AUTH(state, auth){
        state.auth = auth
    },
    SET_USER(state, data) {
        state.user = data
    },
    PUSH_DATA(state, userData) {
        state.users.push(userData)
    },
    DELETE_DATA(state, id) {
        let index = state.users.findIndex(users => users.id == id)
        state.users.splice(index, 1)
    },
    GET_DATA_BY_ID(state, id) {
        let index = state.users.findIndex(users => users.id == id)
        state.users[index]
    },
    EDIT_DATA(state, data) {
        let index = state.users.findIndex(users => users.id == data.id)
        state.users[index].name = data.name
        state.users[index].password = data.password
    }
}

export const actions = { 
    setAuth: ({commit}, auth) => {
        commit('SET_AUTH', auth)
    },
    setUser: ({commit}, data) => {
        commit('SET_USER', data)
    }
}