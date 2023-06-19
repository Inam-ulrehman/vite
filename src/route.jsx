import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/page'
import About from './pages/about/page'
import Dashboard from './pages/dashboard/page'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPage from './pages/errorPage'
import Layout from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from './pages/dashboard/profile/page'
import LayoutDashboard from './pages/dashboard/LayoutDashboard'

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        {/* ================>>>>> Layout Start  */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
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
          </Route>
          {/* ================>>>>> Protected Dashboard End  */}

          {/* ================>>>>> Layout End  */}
        </Route>
        {/* ================>>>>> Error Page  */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default RoutesConfig
