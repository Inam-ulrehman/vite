import { Form, DatePicker } from 'antd'
import moment from 'moment'
import { styled } from 'styled-components'

const DateOfBirth = () => {
  const handleDateChange = (date, dateString) => {
    const selectedDate = moment(dateString, 'YYYY-MM-DD').toDate()
    console.log(selectedDate)
    // You can now save `selectedDate` as a MongoDB Date object
  }

  return (
    <Wrapper>
      <Form.Item label='Date Of Birth'>
        <DatePicker onChange={handleDateChange} size='large' />
      </Form.Item>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .ant-picker {
    width: 100%;
  }
`
export default DateOfBirth
