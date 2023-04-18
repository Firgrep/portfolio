import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getProjects } from "../../api/datafinder";
import { getFirebaseProjects } from "../../api/firebase";

export const loadProjects = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        // const data = await getProjects();
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
    extraReducers: {
        [loadProjects.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadProjects.fulfilled]: (state, action) => {
            state.projects = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadProjects.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectProjects = state => state.projects;

export const selectProjectById = (state, projectId) => {
    return state.projects.projects.find(project => project.id === projectId);
}

export default projectsSlice.reducer;
