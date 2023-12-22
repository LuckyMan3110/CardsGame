import {
    GET_SELECT_GAME_DATA_SUCCESS,
    GET_SELECT_GAME_DATA_FAIL,
    CREATE_GAME_DATA_SUCCESS,
    CREATE_GAME_DATA_FAIL,
    SET_USER_GAME_DATA_SUCCESS,
    SET_USER_GAME_DATA_FAIL
} from '../../../action/gameAction/gameActionTypes';

const initialState = {
    dataAllGame: [],
    message: null,
    error: null,
    isSuccess: false,
};

const dataGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECT_GAME_DATA_SUCCESS:
            return {
                ...state,
                dataAllGame: action.payload,
                message: null,
                error: null,
                isSuccess: true,
            };
        case GET_SELECT_GAME_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                message: '',
                isSuccess: false,
            };

        default:
            return state;
    }
};

export default dataGameReducer;
