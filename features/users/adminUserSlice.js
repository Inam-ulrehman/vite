import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../lib/axios/customFetch'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  userList: [],
  search: '',
  page: 1,
  limit: 15,
  totalCount: 0,
  countOnPage: 0,
  sort: '-createdAt',
  isLoading: false,
}
export const adminUsersThunk = createAsyncThunk(
  'adminUsers/adminUsersThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch('')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ==============>>>>>>>>>>> get all users <<<<<<<<<<<<==================
export const adminGetAllUsersThunk = createAsyncThunk(
  'adminUsers/adminGetAllUsersThunk',
  async (_, thunkAPI) => {
    const { search, page, limit } = thunkAPI.getState().adminUsers
    console.log('search', search, 'page', page, 'limit', limit)
    try {
      const response = await customFetch(
        `users?search=${search}&page=${page}&limit=${limit}`
      )

      return response.data
    } catch (error) {
      toast.error('Error fetching users')
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const adminUsersSlice = createSlice({
  name: 'adminUsers',
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
      .addCase(adminUsersThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        console.log(payload)
        state.isLoading = true
      })
      .addCase(adminUsersThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(adminUsersThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
      // ==============>>>>>>>>>>> get all users <<<<<<<<<<<<==================
      .addCase(adminGetAllUsersThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(adminGetAllUsersThunk.fulfilled, (state, { payload }) => {
        state.userList = payload.result
        state.isLoading = false
      })
      .addCase(adminGetAllUsersThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues, clearState } =
  adminUsersSlice.actions

export default adminUsersSlice.reducer
