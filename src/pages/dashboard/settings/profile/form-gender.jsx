import { Form, Select } from 'antd'
import { capitalizeFirstLetter } from '../../../../../lib/helper'
import { useState } from 'react'

const Gender = ({ state, setState }) => {
  // create options for gender
  const genderOptions = ['male', 'female', 'other']
  const [selectedGender, setSelectedGender] = useState('')

  const handleGenderChange = (value) => {
    setSelectedGender(value)
    setState({ ...state, gender: value })
  }

  return (
    <div>
      <Form.Item label='Gender'>
        <Select
          placeholder='Select gender'
          onChange={handleGenderChange}
          value={state.gender || selectedGender}
          size='large'
        >
          {genderOptions.map((option) => (
            <Select.Option key={option} value={option}>
              {capitalizeFirstLetter(option)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  )
}

export default Gender
