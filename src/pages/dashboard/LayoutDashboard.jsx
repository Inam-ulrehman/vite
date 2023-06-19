import { Link, Outlet } from 'react-router-dom'

const LayoutDashboard = () => {
  return (
    <>
      <div className=''>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/profile'>Profile</Link>
      </div>
      <Outlet />
    </>
  )
}

export default LayoutDashboard
