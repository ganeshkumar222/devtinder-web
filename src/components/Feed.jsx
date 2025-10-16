import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store) => store.feed)
  useEffect(() =>{
    const getFeed = async () =>{
      if(feed) return;
    try {
      const response = await axios.get(BASE_URL +"/user-requests/feed",{withCredentials:true})
      console.log(response)
      dispatch(addFeed(response.data.data))

    } catch (error) {
      console.log(error)
    }
  }
  getFeed()
  }, [])
  return (
    feed && (
      <div className='flex items-center justify-center my-10'>
        <UserCard user={feed[0]} />
      </div>
    )
  )
}

export default Feed
