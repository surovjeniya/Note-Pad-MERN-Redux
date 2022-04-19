import {ADD_POST} from '../actionTypes'
import axios from 'axios'


export const addPostAction = (data,userId) => {
    return async dispatch => {
        dispatch({
            type:ADD_POST,
            post: await axios.post('/api/post/create-post',{...data,userId},{headers:{'Content-Type':'application/json'}})
        })
    }
}

