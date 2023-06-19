import { MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

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
        <Title level={2}> Recover Password </Title>
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
            placeholder='Please enter your email address'
            type='email'
          />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Submit
          </Button>
          Or <Link to='/register'>Login now!</Link>
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
