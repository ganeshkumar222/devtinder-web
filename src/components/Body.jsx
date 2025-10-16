import { Outlet, useNavigate } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((store)=> store.user)
  const fetchUser = async() =>{
    if(userData) return
    try {
      console.log("making a api call")
      const user = await axios.get(BASE_URL + "/user/profile",{withCredentials:true})
      dispatch(addUser(user.data))

    } catch (error) {
       if(error.status === 401){
            navigate("/login")
       }
      console.error(error)
    }
  }

  useEffect(()=>{
   fetchUser()
  },[])
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body
