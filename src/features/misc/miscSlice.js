import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirebaseMisc } from '../../api/firebase/firebaseRealtimeDatabase';


export const loadMisc = createAsyncThunk(
    "misc/fetchMisc",
    async () => {
        const data = await getFirebaseMisc();
        return data;
    }
);

export const miscSlice = createSlice({
    name: 'misc',
    initialState: {
        misc: {},
        isLoading: false,
        hasError: false,
        loaded: false
    }, 
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadMisc.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.loaded = false;
            })
            .addCase(loadMisc.fulfilled, (state, action) => {
                state.misc = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.loaded = true;
            })
            .addCase(loadMisc.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.loaded = false;
            });
    }
});

export const selectMiscLoading = state => state.misc.isLoading;
export const selectMiscError = state => state.misc.hasError;
export const selectMiscLoaded = state => state.misc.loaded;
export const selectMisc = state => state.misc.misc;

export default miscSlice.reducer;
