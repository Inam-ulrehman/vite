import { Button, Form, Input } from 'antd'
import { styled } from 'styled-components'
import FormMobile from './form-mobile'
import { useState } from 'react'
import GooglePlacesHook from './googlePlacesHook'

const initialStates = {
  email: '',
  mobile: '',
  apartment: '',
  house: '',
  street: '',
  city: '',
  province: '',
  country: '',
  postalCode: '',
  location: {
    type: 'Point',
    coordinates: [],
  },
}
const ContactDetails = () => {
  const [state, setState] = useState(initialStates)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h1>Contact Details</h1>
        {/* email */}
        <div>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              size='large'
              type='email'
              value={state.email}
              name='email'
              onChange={handleChange}
              required
            />
          </Form.Item>
        </div>
        {/* mobile */}
        <FormMobile state={state} setState={setState} />

        {/* Search Address */}
        <div>
          <Form.Item label='Search Address'>
            <GooglePlacesHook state={state} setState={setState} />
          </Form.Item>
        </div>
        {/* apartment */}
        <div>
          <Form.Item label='Apartment'>
            <Input
              size='large'
              type='text'
              value={state.apartment}
              name='apartment'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* house */}
        <div>
          <Form.Item label='House'>
            <Input
              size='large'
              type='text'
              value={state.house}
              name='house'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* street */}
        <div>
          <Form.Item label='Street'>
            <Input
              size='large'
              type='text'
              value={state.street}
              name='street'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* city */}
        <div>
          <Form.Item label='City'>
            <Input
              size='large'
              type='text'
              value={state.city}
              name='city'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* province */}
        <div>
          <Form.Item label='Province'>
            <Input
              size='large'
              type='text'
              value={state.province}
              name='province'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* country */}
        <div>
          <Form.Item label='Country'>
            <Input
              size='large'
              type='text'
              value={state.country}
              name='country'
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        {/* postalCode */}
        <div>
          <Form.Item label='Postal Code'>
            <Input
              size='large'
              type='text'
              value={state.postalCode}
              name='postalCode'
              onChange={handleChange}
            />
          </Form.Item>
        </div>

        {/* update */}
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
