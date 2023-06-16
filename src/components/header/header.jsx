import { Button } from 'antd'
import { styled } from 'styled-components'

const Header = () => {
  // import.meta.env.VITE_PUBLIC_WEBSITE

  return (
    <Wrapper>
      Header home page
      <Button type='primary'>Button</Button>
      <Button type='primary'>Button</Button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  min-height: 100px;
`
export default Header
