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
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['md'],
    ellipsis: true,
    width: 150,
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    key: 'mobile',
    responsive: ['md'],
    ellipsis: true,
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: ['city', 'country'], // Array of field names
    key: 'address',
    responsive: ['md'],
    ellipsis: true,
    width: 150,
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
    width: 65,
  },
  {
    title: 'Status',
    dataIndex: 'active',
    key: 'active',
    render: (_, record) => {
      const { active } = record
      const color = active ? 'green' : 'red'
      const text = active ? 'Active' : 'Inactive'
      return <span style={{ color }}>{text}</span>
    },
    width: 80,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      // console.log(record),
      <Space size='middle'>
        <Button type='primary'>Edit</Button>
      </Space>
    ),
    width: 80,
  },
]

const App = () => {
  const { userList, isLoading } = useSelector((state) => state.adminUsers)

  return (
    <Table
      size='large'
      columns={columns}
      dataSource={userList.map((item) => ({ ...item, key: item._id }))}
      bordered
      footer={() => 'Footer'}
      pagination={false}
      loading={isLoading}
    />
  )
}
export default App
