import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetAllUsersThunk } from '../../../../../features/users/adminUserSlice'
import TableComponent from './tableComponent'
import SearchComponent from './searchComponent'

const AdminUsers = () => {
  const dispatch = useDispatch()
  const { search } = useSelector((state) => state.adminUsers)
  useEffect(() => {
    document.title = 'Admin Users'
    dispatch(adminGetAllUsersThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <div>
      <SearchComponent />
      <TableComponent />
    </div>
  )
}

export default AdminUsers
