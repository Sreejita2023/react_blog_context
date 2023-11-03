import React,{useState,useContext,useEffect,useRef,forwardRef} from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
function Blog() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog,setBlog]=useState(null)
  // const blog=useRef(null)
  const  [relatedblogs,setRelatedblogs]=useState([])
  // const  relatedblogs=useRef([])
  const location=useLocation()
  const navigate=useNavigate()
  console.log("inside block")
  const {loading,setLoading}=useContext(AppContext)
  const blogId=location.pathname.split("/").at(-1)
  console.log(blogId)
  async function fetchRelatedBlogs(){
    setLoading(true)
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const response=await fetch(url)
      const data=await response.json()
      console.log("get the data")
      console.log(data)
      console.log(data.blog)
      console.log(data.relatedBlogs)
      setBlog(data.blog)
      // setRelatedblogs(data.relatedBlogs)
      setRelatedblogs(data.relatedBlogs)
      
      console.log("here is blog",blog)
      console.log("here ",relatedblogs)
    }
    catch(error){
       console.log("There is an major error",error)
       setBlog(null)
      setRelatedblogs([])
    }
  }
  useEffect(()=>{
    console.log("working useffect",blogId)
    if(blogId){
      console.log("taking time")
      fetchRelatedBlogs()
    }
  },[location.pathname])
  return (
    <div>
      <Header/>
      <div>
          <button onClick={()=>navigate(-1)}>Back</button>
          <span>Blogged on <span>{blog.title}</span></span>
       </div>
       <div className='w-full flex flex-col justify-center items-center gap-y-14 mt-[100px] mb-[500px] py-8  h-screen '>
        {
            loading? <Spinner/> : (
                blog.length==0?(
                    <div>No post found</div>
                ):(
                   <div>
                     <Card post={blog}/>
                    <div></div>
                    {relatedblogs.map((element)=> {
                      <Card post={element} key={element.id}/>
                    })}
                   </div>
                )
            )
        }
    </div>
    <Footer/>
    </div>
  )
}

export default Blog