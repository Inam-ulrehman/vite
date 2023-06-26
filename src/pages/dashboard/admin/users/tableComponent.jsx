import { Button, Space, Table, Tooltip } from 'antd'
import { UserOutlined, CrownOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    ellipsis: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    ellipsis: true,
    responsive: ['md'],
  },
  {
    title: 'Address',
    dataIndex: ['city', 'country'], // Array of field names
    key: 'address',
    ellipsis: true,
    responsive: ['md'],
    render: (_, record) => {
      const { city, country } = record
      const addressParts = [city, country].filter(Boolean) // Filter out empty values
      const capitalizedParts = addressParts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1)
      ) // Capitalize first letter
      const address = capitalizedParts.join(', ')
      return <span>{address}</span>
    },
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (role) => {
      const icon =
        role === 'admin' ? (
          <Tooltip title='Admin'>
            <CrownOutlined style={{ color: '#ffcc00' }} />
          </Tooltip>
        ) : (
          <Tooltip title='User'>
            <UserOutlined />
          </Tooltip>
        )
      return icon
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      // console.log(record),
      <Space size='middle'>
        <Button type='primary'>Edit</Button>
        <Button type='danger'>Delete</Button>
      </Space>
    ),
  },
]

const App = () => {
  const { userList, isLoading } = useSelector((state) => state.adminUsers)

  if (isLoading) return <div>Loading...</div>
  return (
    <Table
      size='large'
      columns={columns}
      dataSource={userList.map((item) => ({ ...item, key: item._id }))}
      bordered
      footer={() => 'Footer'}
      pagination={false}
    />
  )
}
export default App
