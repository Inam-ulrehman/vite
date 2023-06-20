import { Button } from 'antd'
import { styled } from 'styled-components'
import Cookies from 'js-cookie'
import DesktopMenu from './menu'
import { LogoutOutlined } from '@ant-design/icons'

const DesktopNavbar = () => {
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('name')
    Cookies.remove('role')
    window.location.href = '/'
  }
  return (
    <Wrapper>
      <DesktopMenu />
      <Button
        style={{ width: `100%` }}
        onClick={handleLogout}
        icon={<LogoutOutlined />}
      ></Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`
export default DesktopNavbar
