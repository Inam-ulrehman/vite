import {
  DashboardOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import Cookies from 'js-cookie'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

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
// check if user is admin

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

items.push({
  label: <Link to='/'>LogOut</Link>,
  key: 'logout',
  icon: <LogoutOutlined />,
  // disabled: true,
})

const MobileMenu = ({ onClose }) => {
  const handleClose = (e) => {
    if (e.key === 'logout') {
      Cookies.remove('token')
      Cookies.remove('role')
      Cookies.remove('name')
    }

    onClose()
  }
  return (
    <Wrapper>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='light'
        items={items}
        onClick={handleClose}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default MobileMenu
