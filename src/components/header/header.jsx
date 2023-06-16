import { Button, Typography } from 'antd'
import { styled } from 'styled-components'

const Header = () => {
  const { Title } = Typography
  // import.meta.env.VITE_PUBLIC_WEBSITE

  return (
    <Wrapper>
      <Title level={1}>Header</Title>
      {/* Header home page */}
      <Button type='primary'>Button</Button>
      <Button type='primary'>Button</Button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  min-height: 100px;
`
export default Header
