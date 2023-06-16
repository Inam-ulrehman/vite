import { ConfigProvider } from 'antd'
import { theme } from './lib/styles/theme'

const Providers = ({ children }) => {
  return (
    <>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </>
  )
}

export default Providers
