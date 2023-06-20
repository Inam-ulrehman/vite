import { Select, Form } from 'antd'
const { Option } = Select

const countryOptions = [
  { label: 'United States', value: '+1' },
  { label: 'United Kingdom', value: '+44' },
  // Add more countries here...
]

const MobileNumberForm = () => {
  const handleCountryChange = (value) => {
    console.log('Selected Country:', value)
  }

  return (
    <Form.Item label='Country'>
      <Select
        placeholder='Select Country'
        size='large'
        onChange={handleCountryChange}
      >
        {countryOptions.map((country) => (
          <Option key={country.value} value={country.value}>
            {country.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default MobileNumberForm
