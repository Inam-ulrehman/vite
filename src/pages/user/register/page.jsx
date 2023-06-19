import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { styled } from 'styled-components'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons'

const Login = () => {
  const { Title } = Typography

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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
        <Title level={2}>Register</Title>
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Name'
          />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            placeholder='Email'
            type='email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            { min: 8, message: 'Minimum 8 Characters.' },
            {
              pattern: new RegExp('^(?=.*[a-z])'),
              message: 'Lowercase Letter!',
            },
            {
              pattern: new RegExp('^(?=.*[A-Z])'),
              message: 'Uppercase Letter!',
            },
            {
              pattern: new RegExp('^(?=.*\\d)'),
              message: 'Number!',
            },
            {
              pattern: new RegExp('^(?=.*[!@#$%^&*()_+])'),
              message: 'Special Character!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='Password'
            size='large'
          />
        </Form.Item>

        <Form.Item
          name='confirm'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                )
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            placeholder='Confirm Password'
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
          >
            Register
          </Button>
          Or <Link to='/'>Login now!</Link>
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
