import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'
function Footer() {
  const {page,totalpages,handleChange}=useContext(AppContext)
  console.log("inside Footer")
  console.log(page)
  
  return (
    <div className=' py-4 w-full  border-t border-gray-400  fixed bottom-0 left-0 right-0 bg-white'>
      <div className='w-8/12  mx-auto flex justify-between'>
         <div className='grid grid-cols-2 gap-x-2'>
          {page>1 && <button className='px-3 py-1 border-2 border-gray-200 rounded-md' onClick={()=>handleChange(page-1)}>Previous</button>}
           {page<totalpages && <button className='px-3 py-1 border-2 border-gray-200 rounded-md' onClick={()=>handleChange(page+1)}>Next</button>}
        </div>
         <div className='font-semibold'>
            Page <span>{page}</span> of <span>{totalpages}</span>
         </div>
      </div>
    </div>
  )
}

export default Footer