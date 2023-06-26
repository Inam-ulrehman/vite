import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch, customFetchLocal } from '../../lib/axios/customFetch'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'
import { addObjectInState } from '../../lib/helper'
const initialState = {
  // ========>>>> User Profile
  _id: '',
  name: Cookies.get('name') ? Cookies.get('name') : '',
  lastName: '',
  mobile: '',
  email: '',
  role: Cookies.get('role') ? Cookies.get('role') : 'user',
  gender: '',
  dob: '',
  active: '',
  verified: '',
  location: '',
  // ========>>>> User Address
  apartment: '',
  house: '',
  street: '',
  city: '',
  region: '',
  province: '',
  country: '',
  postalCode: '',
  // ========>>>> User Social
  createdAt: '',
  updatedAt: '',
  // ========>>>> other values
  isMember: Cookies.get('token') ? true : false,
  isLoading: false,
  isUpdating: false,
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

//  ================>>>>>>>>> User Profile <<<<<<<<<<==================
export const userProfileThunk = createAsyncThunk(
  'users/userProfileThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch('users/profile')
      return response.data
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong')
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
//  ================>>>>>>>>> User Profile Update <<<<<<<<<<==================
export const userProfileUpdateThunk = createAsyncThunk(
  'users/userProfileUpdateThunk',
  async (state, thunkAPI) => {
    try {
      const response = await customFetch.put('users/profile', state)
      toast.success(response.data.message)
      return response.data
    } catch (error) {
      toast.error(error.response.data.message || 'Something went wrong')
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
      //  ================>>>>>>>>> User Profile <<<<<<<<<<==================
      .addCase(userProfileThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(userProfileThunk.fulfilled, (state, { payload }) => {
        addObjectInState(payload.result, state)
        state.isLoading = false
      })
      .addCase(userProfileThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
      //  ================>>>>>>>>> User Profile update <<<<<<<<<<==================
      .addCase(userProfileUpdateThunk.pending, (state) => {
        state.isUpdating = true
      })
      .addCase(userProfileUpdateThunk.fulfilled, (state, { payload }) => {
        addObjectInState(payload.result, state)
        state.isUpdating = false
      })
      .addCase(userProfileUpdateThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isUpdating = false
      })
  },
})
export const { createFunction, getStateValues, clearState } = usersSlice.actions

export default usersSlice.reducer
