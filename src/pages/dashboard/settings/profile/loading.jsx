import { Button, Form, Skeleton } from 'antd'

const Loading = () => {
  return (
    <div>
      <Form name='basic'>
        <h1>Profile</h1>

        {/* name */}
        <Form.Item
          label='Name'
          name='name'
          // how to add initial value to form item

          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* lastName */}
        <Form.Item label='Last Name' name='lastName'>
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* lastName */}
        <Form.Item label='Gender' name='lastName'>
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* lastName */}
        <Form.Item label='Date Of Birth' name='lastName'>
          <Skeleton.Input active size='large' block />
        </Form.Item>

        <Form.Item>
          <Button
            className='update'
            type='primary'
            htmlType='submit'
            size='large'
            loading={true}
          >
            Loading...
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Loading
