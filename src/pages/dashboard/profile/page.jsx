import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import FormMobile from './form-mobile'
import Gender from './form-gender'
import DateOfBirth from './form-dob'
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
        <Input size='large' />
      </Form.Item>
      {/* lastName */}
      <Form.Item label='Last Name' name='lastName'>
        <Input size='large' />
      </Form.Item>
      {/* email */}
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input size='large' type='email' />
      </Form.Item>

      {/* mobile */}
      <FormMobile />

      {/* Gender */}
      <Gender />

      {/* Date Of Birth */}
      <DateOfBirth />

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
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`
export default Profile
