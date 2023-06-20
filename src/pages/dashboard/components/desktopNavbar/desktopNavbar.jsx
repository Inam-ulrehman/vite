import { styled } from 'styled-components'

import DesktopMenu from './menu'

const DesktopNavbar = () => {
  return (
    <Wrapper>
      <DesktopMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`
export default DesktopNavbar
