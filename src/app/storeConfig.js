import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import projectsReducer from '../features/projects/projectsSlice';
import blogReducer from '../features/blog/blogSlice';
import blogPostsReducer from '../features/blogPost/blogPostSlice';
import miscReducer from '../features/misc/miscSlice.js';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  projects: projectsReducer,
  blog: blogReducer,
  blogPosts: blogPostsReducer,
  misc: miscReducer
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
