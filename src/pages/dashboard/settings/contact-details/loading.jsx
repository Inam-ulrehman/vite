import { Button, Form, Skeleton } from 'antd'

const Loading = () => {
  return (
    <div>
      <Form name='basic'>
        <h1>Contact Details</h1>

        {/* name */}
        <Form.Item
          label='Email'
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
        {/* mobile */}
        <Form.Item label='Mobile'>
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* address */}
        <Form.Item label='Type Address'>
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* apartment */}
        <Form.Item label='Apartment'>
          <Skeleton.Input active size='large' block />
        </Form.Item>
        {/* House */}
        <Form.Item label='House'>
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
