import styled from 'styled-components'

import { App, Button, Form, Input, Typography } from 'antd'
import { LockOutlined } from '@ant-design/icons'
const { Title } = Typography
const ChangePassword = () => {
  const onFinish = async (values) => {}
  return (
    <Wrapper>
      <Form name='normal_login' className='login-form' onFinish={onFinish}>
        <h1>Change Password</h1>
        <Form.Item
          label='password'
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
          label='Confirm Password'
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
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            size='large'
          >
            Update Password
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
    width: 140px;
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
export default ChangePassword
