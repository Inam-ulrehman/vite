import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    label: <Link to='/dashboard'>Dashboard</Link>,
    key: 'dashboard',
    icon: <DashboardOutlined />,
  },
  {
    label: <Link to='/dashboard/profile'>Profile</Link>,
    key: 'profile',
    icon: <UserOutlined />,
    // disabled: true,
  },
]
if (Cookies.get('role') === 'admin') {
  items.push({
    label: 'Admin',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link to='/dashboard/admin'>Home</Link>,
        key: 'setting:1',
      },
      {
        label: <Link to='/dashboard/admin/users'>Users</Link>,
        key: 'setting:2',
      },
      {
        label: (
          <Link to='/dashboard/admin/contact-submissions'>
            Contact Submissions
          </Link>
        ),
        key: 'setting:3',
      },
    ],
  })
}
const DesktopMenu = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div style={{ width: collapsed ? 50 : 256 }}>
      <Button
        type='primary'
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        style={{ width: collapsed ? 50 : 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='light'
        inlineCollapsed={collapsed}
        items={items}
        onClick={(e) => console.log(e)}
      />
    </div>
  )
}
export default DesktopMenu
