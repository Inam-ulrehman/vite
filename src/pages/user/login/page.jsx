import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { styled } from 'styled-components'
import Cookies from 'js-cookie'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { customFetch } from '../../../../lib/axios/customFetch'
import { App } from 'antd'
const initialState = {
  isLoading: false,
}
const Login = () => {
  const [state, setState] = useState(initialState)
  const { notification } = App.useApp()

  const { Title } = Typography

  const onFinish = async (values) => {
    setState({ ...state, isLoading: true })
    try {
      const response = await customFetch.post('users/login', values)
      setState({ ...state, isLoading: false })
      const { name, role, token } = response.data
      // set cookies for 7 days
      Cookies.set('token', token, { expires: 7 })
      Cookies.set('name', name, { expires: 7 })
      Cookies.set('role', role, { expires: 7 })
      // redirect to Dashboard page
      window.location.href = '/dashboard'
    } catch (error) {
      setState({ ...state, isLoading: false })
      notification.error({
        message: error?.response?.data?.message || 'Something went wrong!',
      })
    }
  }
  return (
    <Wrapper>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title level={2}>Login</Title>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
            type='email'
            size='large'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
            size='large'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className='login-form-forgot' to='/recover'>
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            loading={state.isLoading}
          >
            Log in
          </Button>
          Or <Link to='/register'>register now!</Link>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* place grid in center */
  display: grid;
  min-height: 100vh;
  place-items: center;
  max-width: 90vw;
  margin: 0 auto;
  .ant-form {
    width: 100%;
    border: 1px solid #ccc;
    padding: 2rem;
    border-radius: 0.5rem;
  }
  @media (max-width: 768px) {
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`
export default Login
