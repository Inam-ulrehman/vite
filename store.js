import { configureStore } from '@reduxjs/toolkit'
import sampleSlice from './features/samples/sampleSlice'

const store = configureStore({
  reducer: {
    sample: sampleSlice,
  },
})

export default store
