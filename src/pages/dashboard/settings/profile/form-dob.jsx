import { Form, DatePicker } from 'antd'
import moment from 'moment'
import { styled } from 'styled-components'

const DateOfBirth = ({ state, setState }) => {
  const handleDateChange = (date, dateString) => {
    setState({ ...state, dob: dateString })
  }

  return (
    <Wrapper>
      <Form.Item label='Date Of Birth'>
        <DatePicker
          value={state.dob ? moment(state.dob, 'YYYY-MM-DD') : null}
          onChange={handleDateChange}
          size='large'
          picker='date'
          placement='bottomLeft'
        />
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
