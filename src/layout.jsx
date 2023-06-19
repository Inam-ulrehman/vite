import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className=''>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <Outlet />
      <div className=''>Footer</div>
    </>
  )
}

export default Layout
