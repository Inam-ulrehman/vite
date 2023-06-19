import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Outlet />
      <div className=''>Footer</div>
    </>
  )
}

export default Layout
