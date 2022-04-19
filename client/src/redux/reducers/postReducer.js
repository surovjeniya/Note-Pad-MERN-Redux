import {UPDATE_POST,DELETE_POST,ADD_POST,FILTER_BY_TAG} from '../actionTypes'

const initialState = {
    tags:[],
    posts:[],
    filteredPosts:[]
}

export const postReducer = (state = initialState,action) => {
    switch(action.type) {
        case UPDATE_POST:
            return {
                ...state,
                tags:action.posts.data.posts.map(item => item.hashTags == null ? [] : item.hashTags).flat().reduce((q,i) => q.includes(i) ? q : [...q,i] ,[]),
                posts:action.posts.data.posts
            }
        case FILTER_BY_TAG:
            return {
                ...state,
                filteredPosts:state.posts.length && state.posts.filter(item => item.hashTags.includes(action.tag))
            }
        // case ADD_POST:
        //     console.log('Post added')
        // case DELETE_POST:
        //     console.log('Post deleted')
        default:
            return state
    }
}