import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import FormMobile from './form-mobile'
import { useState } from 'react'
import GooglePlacesHook from './googlePlacesHook'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const initialStates = {
  apartment: '',
  house: '',
  street: '',
  city: '',
  country: '',
  postalCode: '',
  province: '',
  region: '',
  location: {
    type: 'Point',
    coordinates: [],
  },
}
const ContactDetails = () => {
  const [state, setState] = useState(initialStates)
  return (
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
        <h1>Contact Details</h1>
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

        {/* address */}
        <Form.Item
          label='Address'
          name='address'
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
            },
          ]}
        >
          <GooglePlacesHook state={state} setState={setState} />
        </Form.Item>

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
export default ContactDetails
