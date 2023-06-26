import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetAllUsersThunk } from '../../../../../features/users/adminUserSlice'
import TableComponent from './tableComponent'

const AdminUsers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = 'Admin Users'
    dispatch(adminGetAllUsersThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <TableComponent />
    </div>
  )
}

export default AdminUsers
