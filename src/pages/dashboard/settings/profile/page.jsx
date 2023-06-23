import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import Gender from './form-gender'
import DateOfBirth from './form-dob'
import { useState } from 'react'
import { useEffect } from 'react'

const initialState = {
  name: '',
  lastName: '',
  gender: '',
  dob: '',
}
const Profile = () => {
  const [state, setState] = useState(initialState)
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Wrapper>
      <Form
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <h1>Profile</h1>
        {/* name */}
        <Form.Item
          label='Name'
          name='name'
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
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
