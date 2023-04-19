import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebaseProjects } from "../../api/firebase";

export const loadProjects = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        const data = await getFirebaseProjects();
        return data
    }
);

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadProjects.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadProjects.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    }
});

export const selectProjectsState = state => state.projects;

export const selectProjects = state => state.projects.projects;

export const selectProjectById = (state, projectId) => {
    return state.projects.projects.find(project => project.id === projectId);
}

export default projectsSlice.reducer;
