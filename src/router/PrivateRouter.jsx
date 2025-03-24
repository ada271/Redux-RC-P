import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PrivateRouter = () => {
    const {email} = useSelector((state)=>state.yetkiSlice)
  return email=== "ada" ? <Outlet/> : <Navigate to='/login' />

}

export default PrivateRouter