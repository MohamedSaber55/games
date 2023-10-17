import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./slices/games-slice";


const store = configureStore({
    reducer: {
        games: gamesSlice,
    }
})


export default store