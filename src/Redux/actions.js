import { SEARCH_RESULTS } from './action-types'

export const searchResults = (data) => {
    console.log(data);
    return {
        type: SEARCH_RESULTS,
        payload: data
    }
}