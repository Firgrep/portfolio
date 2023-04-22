import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirestoreBlogPost } from '../../api/firebase/firebaseFirestoreDatabase';

export const loadBlogPost = createAsyncThunk(
    "blogPosts/fetchBlogPost",
    async (id) => {
        const data = await getFirestoreBlogPost(id);
        return data;
    }
);

export const blogPostsSlice = createSlice({
    name: 'blogPosts',
    initialState: {
        blogPosts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadBlogPost.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadBlogPost.fulfilled, (state, action) => {
                const newBlogPost = action.payload;
                const isDuplicate = state.blogPosts.some((post) => post.id === newBlogPost.id);
                if (!isDuplicate) {
                    state.blogPosts = [...state.blogPosts, {...action.payload}];
                }
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadBlogPost.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    }
});

export const selectBlogPostsLoading = state => state.blogPosts.isLoading;

export const selectBlogPostsError = state => state.blogPosts.hasError;

export const selectBlogPosts = state => state.blogPosts.blogPosts;

export const selectBlogPostBodyById = (state, postId) => {
    return state.blogPosts.blogPosts.find(post => post.id === postId);
};

export default blogPostsSlice.reducer;
