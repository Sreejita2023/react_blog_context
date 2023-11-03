import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Header from '../components/Header';
import Context from '../components/Context';
import Footer from '../components/Footer';
function Tag() {
  const navigate=useNavigate()
  const location =useLocation()
  const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
       <Header/>
       <div>
          <button onClick={()=>navigate(-1)}>Back</button>
          <span>Tagged on <span>{tag}</span></span>
       </div>
       <Context/>
       <Footer/>
    </div>
  )
}

export default Tag