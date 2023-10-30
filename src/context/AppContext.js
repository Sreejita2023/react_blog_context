import React, {useState,createContext,useRef } from 'react'

import { baseUrl } from '../baseUrl'

export const AppContext=createContext("")

export default function AppContextProvider({children}) {
  const [loading,setLoading]=useState(false)
  // const posts = useRef(null);
  const [posts,setPosts]=useState([])
  const [page,setPage]=useState(1)
  const[totalpages,setTotalpages]=useState(null)
  async function fetchData(page=1){
      setLoading(true)
      let url=`${baseUrl}?page=${page}`
      try {
        const response=await fetch(url)
        const data =await response.json();
        console.log(data.posts)
        setPage(data.page)
        posts.current=data.posts
        setPosts(data.posts)
        setTotalpages(data.totalPages)
        console.log(posts.current)
      } catch (error) {
        console.log("Error in fetching the data ",error)
        setPage(1)
        setPosts([])
        setTotalpages(null)
      }
      setLoading(false)
  }
  function handleChange(page){
      setPage(page)
  }
  const values={
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalpages,
    setTotalpages,
    fetchData,
    handleChange,
  }
  return (
    <AppContext.Provider value={values}>
          {children}
      </AppContext.Provider>
   
  )
}
// centralized data no need of 
