const RecoverPassword = () => {
  const queryParams = new URLSearchParams(location.search)
  console.log(queryParams.get('token'))
  return <div>RecoverPassword</div>
}

export default RecoverPassword
