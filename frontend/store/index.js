export const state = () => ({
    posts: []
})

export const getters = {
    getterValue: state => {
        return state.value
    }
}

export const mutations = {
    updateValue: (state, payload) => {
        state.value = payload
    }
}

export const actions = {
    updateActionValue({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
        console.log(response.data)
            commit('updateValue', response.data)
    })
        
    }
}