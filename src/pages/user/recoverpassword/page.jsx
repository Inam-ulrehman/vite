import { useParams } from 'react-router-dom'

const RecoverPassword = () => {
  const { token } = useParams()
  console.log(token)
  return <div>RecoverPassword</div>
}

export default RecoverPassword
