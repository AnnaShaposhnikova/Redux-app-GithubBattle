import {getReposFailure, getReposLoading, getReposSuccess} from "../redux/actions/popular.actions";
import {FetchPopularRepos} from "../utils/api";


export const FetchPopularReposThunk = (language) => (dispatch) => {
    dispatch(getReposLoading());
    return FetchPopularRepos(language).then((data) => {
           dispatch(getReposSuccess(data))
        })
        .catch((error) => {
            dispatch(getReposFailure(error.message))
        });
}