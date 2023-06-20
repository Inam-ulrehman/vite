import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const Profile = () => (
  <Wrapper>
    <Form
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <h1>Profile</h1>
      <Form.Item
        label='Name'
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button className='update' type='primary' htmlType='submit'>
          Update
        </Button>
      </Form.Item>
    </Form>
  </Wrapper>
)

const Wrapper = styled.div`
  .ant-form {
    width: 100%;
    border: 1px solid #ccc;
    padding: 2rem;
    border-radius: 0.5rem;
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
    label {
      width: 110px;
    }
    input,
    .ant-input-password {
      max-width: 400px;
    }
    .ant-form {
      max-width: 600px;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`
export default Profile
