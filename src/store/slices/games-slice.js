import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import axios from 'axios'
const XRapidAPIKey = "fe550e65c4mshdee14986520ced7p1e62bdjsn9b05e61005e5"



export const fetchData = createAsyncThunk('fetchData', async ({ platform = "all", category, sort }) => {
    let params = { platform }
    if (category) {
        params = {
            platform,
            category,
        }
    }
    if (sort) {
        params = {
            platform,
            'sort-by': sort
        }
    }
    if (category && sort) {
        params = {
            platform,
            category,
            'sort-by': sort
        }
    }

    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
        headers: {
            'X-RapidAPI-Key': XRapidAPIKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params
    })
    return data
})
export const getGameDetails = createAsyncThunk('getGameDetails', async (gameId) => {
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, {
        headers: {
            'X-RapidAPI-Key': XRapidAPIKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        params: {
            id: gameId
        }
    })
    return data
})

const initialState = {
    message: "",
    loading: false,
    error: "",
    data: [],
    game: ""
}

const gamesSlice = createSlice({
    name: "game",
    initialState,
    // extraReducers: {
    //     [fetchData.pending]: (state) => {
    //         state.loading = true
    //     },
    //     [fetchData.fulfilled]: (state, { payload }) => {
    //         state.loading = false
    //         state.data = payload
    //     },
    //     [fetchData.pending]: (state, { payload }) => {
    //         state.loading = false
    //         state.error = payload
    //     },
    // }
    extraReducers: (builder) => {
        builder
            // ------------------------get Games ---------------------------
            .addCase(fetchData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(fetchData.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            // ------------------------get spacial Game ---------------------------
            .addCase(getGameDetails.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getGameDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.game = payload
            })
            .addCase(getGameDetails.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})


export default gamesSlice.reducer