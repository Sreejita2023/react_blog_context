import React ,{useContext}from 'react'
import Spinner from './Spinner'
import Card from './Card'
import {AppContext} from '../context/AppContext'
function Context() {
  const {posts,loading}=useContext(AppContext)
  console.log(posts)

  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-14 mt-[150px] mb-[500px] py-8  h-screen '>
        {
            loading? <Spinner/> : (
                posts.length===0 ? (
                    <div>No post found</div>
                ):(
                  
                  
                    posts.map((element,id) => {
                      return(
                        <Card post={element} key={id}/>
                      )
                    })
                )
            )
        }
    </div>
  )
}

export default Context