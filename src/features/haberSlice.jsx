import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL=import.meta.env.VITE_URL

export const getData = createAsyncThunk("haberSlice/getData", async () => {
    const res = await axios(
        URL
    );
    return res.data.articles;
});

export const haberSlice = createSlice({
    name: "haberSlice",
    initialState: {
        haberler: [],
        loading: true,
    },
    reducers: {
        clear: (state,action) => {
            state.haberler = state.haberler.filter((a)=>a.url !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                (state.haberler = action.payload), (state.loading = false);
            });
    },
});

export const { clear } = haberSlice.actions;

export default haberSlice.reducer;
