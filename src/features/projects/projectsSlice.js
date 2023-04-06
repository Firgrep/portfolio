import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../../api/datafinder";


export const loadRecipes = createAsyncThunk(
    "allRecipes/getAllRecipes",
    async () => {
      const data = await fetch("api/recipes?limit=10");
      const json = await data.json();
      return json;
    }
  );

export const loadProjects = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        const data = await getProjects();
        return data
    }
);

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: {},
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

export const selectProjects = (state) => state.projects.projects

export default projectsSlice.reducer;