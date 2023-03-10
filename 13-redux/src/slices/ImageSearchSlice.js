import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getKakaoSearch = createAsyncThunk("ImageSearchSlice/getKakaoSearch", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_KAKAO_IMAGE_SEARCH_API_URL, {
            params: {
                query: payload.query,
                page: payload.page ? payload.page : 1
            },
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
})

const ImageSearchSlice = createSlice({
    name: 'ImageSearchSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다
    extraReducers: {
        [getKakaoSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getKakaoSearch.fulfilled]: (state, { meta, payload }) => {
            if( meta.arg.page > 1) {
                payload.documents = state.data.documents.concat(payload.documents);
                console.log(`누적 데이터 길이=${payload.documents.length}`);
            }
            return { 
                data: payload,
                loading: false,
                error: null
            }
        },
        [getKakaoSearch.rejected]: (state, { payload }) => {
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

export default ImageSearchSlice.reducer;