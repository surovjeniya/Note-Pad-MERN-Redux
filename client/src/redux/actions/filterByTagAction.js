import {FILTER_BY_TAG} from '../actionTypes'

export const filterByTagAction = (tag) => {
    return {
        type:FILTER_BY_TAG,
        tag
    }
}