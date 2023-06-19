import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/page'
import About from './pages/about/page'
import Dashboard from './pages/dashboard/page'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPage from './pages/errorPage'
import Layout from './layout'

const RoutesConfig = () => {
  return (
    <Routes>
      {/* ================>>>>> Layout Start  */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* ================>>>>> Protected Start  */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* ================>>>>> Protected End  */}
        {/* ================>>>>> Layout End  */}
      </Route>
      {/* ================>>>>> Error Page  */}
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default RoutesConfig
