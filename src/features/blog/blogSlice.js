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
        hasError: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadBlog.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadBlog.fulfilled, (state, action) => {
                state.blog = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    }
});

export const selectBlogState = state => state.blog;

export const selectBlog = state => state.blog.blog;

// TODO func to select blog posts by id

export default blogSlice.reducer;
