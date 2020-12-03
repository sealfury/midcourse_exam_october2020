
import axios from 'axios'

const onSubmitHandler = async () => {
  const response = await axios.get("http://localhost:3000/api/users")
  debugger
  return (
    response.data.users
  )
}

export { onSubmitHandler }
