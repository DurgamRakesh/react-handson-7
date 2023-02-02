import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './Slice'

const Store = configureStore({
    reducer: {
        Data: dataReducer
    }
});

export default Store;