import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = '/news'

//Ajax처리를 위한 미들웨어 함수 정의
export const getList = createAsyncThunk("NewsSlice/getList", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        const response = await axios.get(URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
})

const NewsSlice = createSlice({
    name: 'NewsSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다
    extraReducers: {
        [getList.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getList.fulfilled]: (state, { payload }) => {
            return { 
                data: payload,
                loading: false,
                error: null
            }
        },
        [getList.rejected]: (state, { payload }) => {
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

export default NewsSlice.reducer;