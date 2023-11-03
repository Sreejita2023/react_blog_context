import React, {useState,createContext} from 'react'

import { baseUrl } from '../baseUrl'
import { useNavigate } from 'react-router'

export const AppContext=createContext("")

export default function AppContextProvider({children}) {
   const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [posts,setPosts]=useState([])
  const [page,setPage]=useState(1)
  const[totalpages,setTotalpages]=useState(null)
  async function fetchData(page=1,tag=null,category){
      setLoading(true)
      let url=`${baseUrl}?page=${page}`
      if (tag){
        url+=`&tag=${tag}`
        console.log(`&tag=${tag}`)
      }
      if(category){
        url+=`&category=${category}`
        console.log(`&tag=${category}`)
      }
      try {
        console.log(url)
        const response=await fetch(url)
        const data =await response.json();
        console.log(data.posts)
        console.log(data.totalPages)
        setTotalpages(data.page)
        setPosts(data.posts)
        setTotalpages(data.totalPages)
      } catch (error) {
        console.log("Error in fetching the data ",error)
        setPosts([])
        setPage(1)
        setTotalpages(null)
      }
      setLoading(false)
  }
  function handleChange(page){
      navigate({search :`?page=${page}`})
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
