import { Button } from 'antd'
import Cookies from 'js-cookie'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const LayoutDashboard = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('role')
    window.location.href = '/'
  }
  return (
    <Wrapper>
      <div className=''>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/admin'>Admin</Link>
        <Link to='/dashboard/admin/users'>Users</Link>
        <Button onClick={handleLogout} type='primary'>
          Log Out
        </Button>
      </div>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    margin-right: 10px;
  }
`
export default LayoutDashboard
