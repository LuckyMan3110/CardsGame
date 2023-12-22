import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import gameReducer from "./reducer/gameReducer";
import ubahPasswordReducer from './reducer/ubahPasswordReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        game: gameReducer,
        ubahPassword: ubahPasswordReducer,
    },
});

export default store;
