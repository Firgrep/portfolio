import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirestoreBlog } from '../../api/firebase/firebaseFirestoreDatabase';


export const loadBlog = createAsyncThunk(
    "blog/fetchBlog",
    async () => {
        const data = await getFirestoreBlog();
        return data;
    }
);

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blog: {},
        isLoading: false,
        hasError: false,
        loaded: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadBlog.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
                state.loaded = false;
            })
            .addCase(loadBlog.fulfilled, (state, action) => {
                state.blog = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.loaded = true;
            })
            .addCase(loadBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.loaded = false;
            });
    }
});

export const selectBlogLoading = state => state.blog.isLoading;

export const selectBlogError = state => state.blog.hasError;

export const selectBlogLoaded = state => state.blog.loaded;

export const selectBlog = state => state.blog.blog;

export const selectBlogDetailsById = (state, id) => {
    return state.blog.blog[id];
};

export default blogSlice.reducer;
