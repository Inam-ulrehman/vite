import { Input } from 'antd'
import { styled } from 'styled-components'
const SearchComponent = () => {
  const { Search } = Input
  return (
    <Wrapper>
      <Search
        placeholder='Search users'
        enterButton='Search'
        size='large'
        // loading
        allowClear
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 500px;
`
export default SearchComponent
