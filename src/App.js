import { Route,Routes} from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Tag from "./pages/Tag";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { useContext, useEffect } from "react";
import './App.css'
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import fetchRelatedBlogs from './pages/Blog'
export default function App() {
  const {fetchData,posts}=useContext(AppContext)
  let [searchParams,setSearchParams]=useSearchParams() 
  const location=useLocation()
  useEffect(()=>{
    const page=searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ")
      console.log(tag)
      fetchData(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
      console.log("name",category)
      fetchData(Number(page),null,category)
    }
    else{
      fetchData(Number(page))
    }
  },[location.pathname,location.search])

  console.log(posts)
  return <div className="w-screen h-screen">
     <div className="relative">
      
        <Routes>
          <Route path="/tags/:tag" element={<Tag/>}/>
          <Route path="/blog/:blogId" element={<Blog/>}/>
          <Route path="/categories/:category" element={<Category/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
     </div>
  </div>;
}
