import { App, Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import Gender from './form-gender'
import DateOfBirth from './form-dob'
import { useState } from 'react'
import { useEffect } from 'react'
import { customFetch } from '../../../../../lib/axios/customFetch'
import ApiLoading from '../../../../components/singleComponent/apiLoading'

const initialState = {
  name: '',
  lastName: '',
  gender: '',
  dob: '',
  isLoading: false,
  updateLoading: false,
}
const Profile = () => {
  const [state, setState] = useState(initialState)
  const { notification } = App.useApp()
  const onFinish = async () => {
    try {
      setState({ ...state, updateLoading: true })
      const response = await customFetch.put('users/profile', state)
      console.log(state)
      setState({ ...state, updateLoading: false })
      notification.success({
        message: 'Success',
        description: response?.data?.message || 'Profile updated successfully',
      })
    } catch (error) {
      setState({ ...state, updateLoading: false })
      notification.error({
        message: 'Error',
        description: error?.response?.data?.message || 'Something went wrong',
      })
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  // get data from server and set it to state
  useEffect(() => {
    const getData = async () => {
      try {
        setState({ ...state, isLoading: true })
        const response = await customFetch('users/profile')
        const { name, lastName, gender, dob } = response.data.result

        setState({ ...state, name, lastName, gender, dob, isLoading: false })
        console.log(dob)
      } catch (error) {
        setState({ ...state, isLoading: false })
        notification.error({
          message: 'Error',
          description: error?.response?.data?.message || 'Something went wrong',
        })
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (state.isLoading) return <ApiLoading />
  return (
    <Wrapper>
      <Form
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        initialValues={{ ...state }}
      >
        <h1>Profile</h1>

        {/* name */}
        <Form.Item
          label='Name'
          name='name'
          // how to add initial value to form item

          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input
            name='name'
            size='large'
            value={state.name}
            onChange={handleChange}
          />
        </Form.Item>
        {/* lastName */}
        <Form.Item label='Last Name' name='lastName'>
          <Input
            size='large'
            name='lastName'
            value={state.lastName}
            onChange={handleChange}
          />
        </Form.Item>

        {/* Gender */}
        <Gender state={state} setState={setState} />

        {/* Date Of Birth */}
        <DateOfBirth state={state} setState={setState} />

        <Form.Item>
          <Button
            className='update'
            type='primary'
            htmlType='submit'
            size='large'
            loading={state.updateLoading}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 150vh;
  .ant-form {
    width: 100%;
    border: 1px solid #ccc;
    padding: 2rem;
    border-radius: 0.5rem;
  }
  label {
    width: 110px;
  }
  /* Mobile */
  @media (max-width: 580px) {
    .ant-form-item {
      margin-bottom: 0;
    }
    .update {
      width: 100%;
      margin-top: 1rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    .update {
      width: 100%;
    }
  }
  /* Desktop & ipad & laptop */
  @media (min-width: 768px) {
    input,
    .ant-input-password,
    .ant-select,
    .mobile-input,
    .ant-picker {
      max-width: 400px;
    }

    .ant-form {
      max-width: 600px;
      margin: 2rem auto;
    }
  }
`

export default Profile
