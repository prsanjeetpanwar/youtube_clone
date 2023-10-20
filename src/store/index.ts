import { configureStore, createSlice } from '@reduxjs/toolkit';
import { InitalState } from './../type';

const initialState: InitalState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '', // Add this property
  searchResults: [], // Add this property
  nextPageToken: null, // Add this property
  recommendedVideos: [], // Add this property
};

const youtubeSlice = createSlice({
  name: "Youtube",
  initialState, 
  reducers: {
    
  },
  extraReducers:(builder=>{

  })
});


export const store=configureStore({
    reducer:{
      youtube:youtubeSlice.reducer    
    }
})


export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch;