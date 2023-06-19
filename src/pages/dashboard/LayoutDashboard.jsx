import { Button } from 'antd'
import Cookies from 'js-cookie'
import { Link, Outlet } from 'react-router-dom'

const LayoutDashboard = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('role')
    window.location.href = '/'
  }
  return (
    <>
      <div className=''>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Button onClick={handleLogout} type='primary'>
          Log Out
        </Button>
      </div>
      <Outlet />
    </>
  )
}

export default LayoutDashboard
