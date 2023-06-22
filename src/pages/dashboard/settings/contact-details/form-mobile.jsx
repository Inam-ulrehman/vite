import { Form } from 'antd'
import { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { styled } from 'styled-components'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
const initialState = {
  mobile: '',
  value: '',
  error: '',
}
const MobileNumberForm = () => {
  const [state, setState] = useState(initialState)
  const { value, error } = state

  useEffect(() => {
    if (value) {
      // if isPossiblePhoneNumber is not true then show error message
      console.log(value)
      if (!isPossiblePhoneNumber(value)) {
        setState({ ...state, error: 'Invalid phone number' })
      } else {
        setState({ ...state, error: '' })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  return (
    <Wrapper>
      <Form.Item label='Mobile'>
        <PhoneInput
          className='mobile-input'
          defaultCountry='CA'
          placeholder='Enter phone number'
          value={value}
          onChange={(value) => setState({ ...state, value })}
        />
        {error && <p style={{ color: 'red', margin: '0px' }}>{error}</p>}
      </Form.Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .mobile-input {
    width: 100%;
    height: 40px;
    padding: 0 11px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    font-size: 16px;
    // create hover color like antd input
    &:hover {
      border-color: #80bdff;
    }
  }
  input {
    border: none;
    // on focus remove outline
    &:focus {
      outline: none;
    }
  }
`
export default MobileNumberForm
