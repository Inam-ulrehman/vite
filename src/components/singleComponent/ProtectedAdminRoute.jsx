import { Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
const ProtectedAdminRoute = ({ children }) => {
  const { role } = useSelector((state) => state.user)
  console.log(role)
  if (role !== 'admin') {
    return <Navigate to={'/dashboard'} />
  } else {
    return children
  }
}

export default ProtectedAdminRoute
