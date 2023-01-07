import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovieRank = createAsyncThunk("MovieRankSlice/getMovieRank", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_KOBIS_API_URL, {
            params: {
                key: process.env.REACT_APP_KOBIS_API_KEY,
                targetDt: payload.targetDt
            }
        });
        
        result = response.data;

        if(result.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: 500, statusText: result.faultInfo.message};
            throw err;
        }
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
})

const MovieRankSlice = createSlice({
    name: 'MovieRankSlice',

    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다
    extraReducers: {
        [getMovieRank.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getMovieRank.fulfilled]: (state, { payload }) => {
            return { 
                data: payload,
                loading: false,
                error: null
            }
        },
        [getMovieRank.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

export default MovieRankSlice.reducer;