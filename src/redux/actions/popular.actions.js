import { POPULAR_ENTITY } from "../constants/popular.constants";

export const setSelectedLanguage = (payload) =>{
    return {
        type: "POPULAR_ENTITY.SET_SELECTED_LANGUAGE",
        payload,
    };
}

export const getReposLoading = () =>{
    return {
        type: "POPULAR_ENTITY.GET_REPOS_LOADING",

    };
}

export const getReposSuccess = (payload) =>{
    return {
        type: "POPULAR_ENTITY.GET_REPOS_SUCCESS",
        payload,
    };
}

export const getReposFailure = (payload) =>{
    return {
        type: "POPULAR_ENTITY.GET_REPOS_FAILURE",
        payload,
    };
}