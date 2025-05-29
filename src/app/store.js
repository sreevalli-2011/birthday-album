// src/app/store.js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
// import your reducers here as you create them
// e.g., import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    // Add at least one reducer here.
    // For now, you can add a dummy reducer if you don't have real ones yet.
    // Replace 'yourFeature' with the actual name of your feature's reducer when you create it.
    // For example:
    // counter: counterReducer,
    // Or a simple dummy for now:
    dummy: (state = {}, action) => state, // This is a placeholder reducer
  },
});

export default store; 