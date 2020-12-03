import React from 'react'
import { Button, Input } from 'semantic-ui-react'
// import { onSubmitHandler } from '../modules/onSubmitHandler';
import axios from 'axios'

const GHSearch = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    let userData = { user: e.target.name.value }
    debugger
    const response = await axios.get("http://localhost:3000/api/users", userData)
    
    return (
      response.data.users
    )
  }
  return (
    <>
      <Input type="text" data-cy="search-input" placeholder="Input GH username"/>
      <Button 
        data-cy="search-button"
        onClick={(e) => {onSubmitHandler(e)}}
      >
        Search
      </Button>
    </>
  )
}

export default GHSearch
