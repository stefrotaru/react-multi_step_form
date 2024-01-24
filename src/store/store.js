// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import formReducer from './reducers';

import stepsProgressReducer from './reducers/stepsProgressReducer';
import formUserReducer from './reducers/formUserReducer';
import formPlanReducer from './reducers/formPlanReducer';
import formAddonsReducer from './reducers/formAddonsReducer';

// Define your reducers here
// Example:
// import someReducer from './reducers/someReducer';


// Combine your reducers into a root reducer
// const rootReducer = combineReducers({
//     // someReducer,
//     formSlice
// });

// Create the Redux store
const store = configureStore({
    reducer: {
        // form: formReducer,
        stepsProgress: stepsProgressReducer,
        formUser: formUserReducer,
        formPlan: formPlanReducer,
        formAddons: formAddonsReducer,
    }
});

export default store;
