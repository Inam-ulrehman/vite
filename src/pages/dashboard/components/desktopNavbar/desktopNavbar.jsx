import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Cookies from 'js-cookie'
import DesktopMenu from './menu'

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
      <Button onClick={handleLogout}>Log</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`
export default DesktopNavbar
