import axios from 'axios'

export const state = () => ({
    posts: []
})


export const getters = {}

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

export const actions = {
    getPosts({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
        })
    }
}



// export const state = () => ({
//     posts: []
// })

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

// export const mutations = {
//     updateValue: (state, payload) => {
//         state.value = payload
//     }
// }

// export const actions = {
//     updateActionValue({ commit }) {
//         commit('updateValue', payload)
//     }
// }