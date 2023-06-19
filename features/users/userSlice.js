import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../lib/axios/customFetch'
import Cookies from 'js-cookie'
const initialState = {
  name: Cookies.get('name') ? Cookies.get('name') : '',
  lastName: '',
  email: '',
  // isMember: Cookies.get('token') ? true : false,
  isMember: true,
  role: Cookies.get('role') ? Cookies.get('role') : 'user',
  isLoading: false,
}
export const usersThunk = createAsyncThunk(
  'users/usersThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch('')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // createFunction: (state, { payload }) => {
    //   console.log('function call')
    // },
    getStateValues: (state, { payload }) => {
      const { name, value } = payload

      state[name] = value
    },
    clearState: (state) => {
      state.name = ''
      state.lastName = ''
      state.email = ''
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(usersThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        console.log(payload)
        state.isLoading = true
      })
      .addCase(usersThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(usersThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues, clearState } = usersSlice.actions

export default usersSlice.reducer
