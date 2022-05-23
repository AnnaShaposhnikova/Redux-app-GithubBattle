import {BATTLE_ENTITY} from "../constants/battle.constants";

export const initialState = {
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null,
    winner: null,
    looser: null,
    loading: false,
    error: null,
    userNameForPlayerInput: "",
}

export const battleReducer = (state = initialState, action) =>{
    switch(action.type){
        case BATTLE_ENTITY.SET_PLAYER_ONE_NAME:
            state.playerOneName = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_TWO_NAME:
            state.playerTwoName = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_ONE_IMAGE:
            state.playerOneImage = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_PLAYER_TWO_IMAGE:
            state.playerTwoImage = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_WINNER:
            state.winner = Object.assign({}, action.payload);a
            return Object.assign({}, state)

        case BATTLE_ENTITY.SET_LOOSER:
            state.looser = Object.assign({}, action.payload);
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_LOADING:
            state.loading = action.payload;
            return Object.assign({}, state);

        case BATTLE_ENTITY.SET_ERROR:
            state.error = action.payload;
            return Object.assign({}, state);

        default:
            return state;
    }
}