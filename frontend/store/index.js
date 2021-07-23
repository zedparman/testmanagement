import axios from 'axios'

export const state = () => ({
    posts: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

export const actions = {
    loadPosts({ commit }) {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                console.log(data.data)
                let posts = data.data
                commit('SET_POSTS', post)
            }
            )
            .catch(error => {
                console.log(error)
            })

    }
}








export const state = () => ({
    value: 'myvalue'
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
        commit('updateValue', payload)
    }
}








// export const state = () => ({
//     posts: []
// })


// export const getters = {}

// export const mutations = {
//     SET_POSTS(state, posts) {
//         state.posts = posts
//     }
// }

// export const actions = {
//     getPosts({ commit }) {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 commit('SET_POSTS', response.data)
//         })
//     }
// }



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