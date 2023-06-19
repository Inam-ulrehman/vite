import { configureStore } from '@reduxjs/toolkit'
import sampleSlice from './features/samples/sampleSlice'
import userSlice from './features/users/userSlice'

const store = configureStore({
  reducer: {
    sample: sampleSlice,
    user: userSlice,
  },
})

export default store
