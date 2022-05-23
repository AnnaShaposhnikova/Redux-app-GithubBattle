import {BATTLE_ENTITY} from "../constants/battle.constants";

export  const setPlayerOneName = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_PLAYER_ONE_NAME,
        payload,
    }
}

export  const setPlayerTwoName = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_PLAYER_TWO_NAME,
        payload,
    }
}

export  const setPlayerOneImage = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_PLAYER_ONE_IMAGE,
        payload,
    }
}

export  const setPlayerTwoImage = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_PLAYER_TWO_IMAGE,
        payload,
    }
}
export  const setWinner = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_WINNER,
        payload,
    }
}

export  const setLooser = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_LOOSER,
        payload,
    }
}

export  const setLoading = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_LOADING,
        payload,
    }
}
export  const setError = (payload) => {
    return {
        type: BATTLE_ENTITY.SET_ERROR,
        payload,
    }
}


