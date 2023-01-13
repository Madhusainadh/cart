import React from 'react'
import {Button} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Button onClick={()=>navigate("/cart")}>cart</Button>
      <Button onClick={()=>navigate("/")}>products</Button>
    </div>
  )
}

export default Navbar
