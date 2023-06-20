import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/dashboard/page'
import ProtectedRoute from './components/singleComponent/ProtectedRoute'
import ErrorPage from './pages/errorPage'
import Layout from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './pages/dashboard/profile/page'
import LayoutDashboard from './pages/dashboard/LayoutDashboard'
import Login from './pages/user/login/page'
import Register from './pages/user/register/page'
import Recover from './pages/user/recover/page'
import RecoverPassword from './pages/user/recoverpassword/page'
import Admin from './pages/dashboard/admin/page'
import ProtectedAdminRoute from './components/singleComponent/ProtectedAdminRoute'
import AdminUsers from './pages/dashboard/admin/users/page'
import LayoutAdminDashboard from './pages/dashboard/admin/LayoutAdminDashboard'

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        {/* ================>>>>> Layout Start  */}
        <Route path='/' element={<Layout />}>
          {/* ================>>>>> Public Routes  */}
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recover' element={<Recover />} />
          <Route path='recoverpassword?' element={<RecoverPassword />} />
          {/* ================>>>>> Public Routes End  */}
          {/* ================>>>>> Protected Dashboard Start  */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <LayoutDashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='/dashboard/profile' element={<Profile />} />

            {/* ================>>>>> Protected Admin Dashboard Start  */}
            <Route
              path='/dashboard/admin'
              element={
                <ProtectedAdminRoute>
                  <LayoutAdminDashboard />
                </ProtectedAdminRoute>
              }
            >
              <Route index element={<Admin />} />
              <Route path='/dashboard/admin/users' element={<AdminUsers />} />
            </Route>
            {/* ================>>>>> Protected Admin Dashboard End  */}
          </Route>
          {/* ================>>>>> Protected Dashboard End  */}
        </Route>
        {/* ================>>>>> Layout End  */}
        {/* ================>>>>> Error Page  */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default RoutesConfig
