import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import DepartmentSlice from "./slices/DepartmentSlice";
import NewsSlice from "./slices/NewsSlice";
import MovieRankSlice from "./slices/MovieRankSlice";

const store = configureStore({
    reducer: {
        CounterSlice: CounterSlice,
        DepartmentSlice: DepartmentSlice,
        NewsSlice: NewsSlice,
        MovieRankSlice: MovieRankSlice
    },

    // 비동기 미들웨어 추가 (Ajax처리가 필요한 경우만 설정)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
});

export default store;