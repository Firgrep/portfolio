import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/projects/projectsSlice';
import blogReducer from '../features/blog/blogSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    blog: blogReducer
  },
});
