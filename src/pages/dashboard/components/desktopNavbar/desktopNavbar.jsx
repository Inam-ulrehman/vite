import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Cookies from 'js-cookie'

const DesktopNavbar = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('role')
    window.location.href = '/'
  }
  return (
    <Wrapper>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/dashboard/profile'>Profile</Link>
      <Link to='/dashboard/admin'>Admin</Link>
      <Link to='/dashboard/admin/users'>Users</Link>
      <Button onClick={handleLogout} type='primary'>
        Log Out
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`
export default DesktopNavbar
