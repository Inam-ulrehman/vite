import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getStateValues } from '../../../../../features/users/adminUserSlice'

const PaginationComponent = () => {
  const { page, totalCount } = useSelector((state) => state.adminUsers)
  const dispatch = useDispatch()
  const onShowSizeChange = (current, pageSize) => {
    console.log('Current: ', current, '; PageSize: ', pageSize)
    dispatch(getStateValues({ name: 'limit', value: pageSize }))
  }
  return (
    <div>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={page}
        total={totalCount}
      />
    </div>
  )
}

export default PaginationComponent
