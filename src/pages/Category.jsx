import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Header from '../components/Header';
import Context from '../components/Context';
import Footer from '../components/Footer';
function Category() {
  const navigate=useNavigate()
  const location =useLocation()
  const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
       <Header/>
       <div>
          <button onClick={()=>navigate(-1)}>Back</button>
          <span>Categorized on <span>{category}</span></span>
       </div>
       <Context/>
       <Footer/>
    </div>
  )
}

export default Category