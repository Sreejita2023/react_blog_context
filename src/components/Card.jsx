import React,{forwardRef} from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    const post=props.post;
    console.log("let see the post",post)
    const cat=post.category.replace(" ","-")
    console.log(post.id)
    console.log("inside card")
  return (
    <div key={post.id} className='w-8/12 mx-auto grid grid-cols-1 gap-y-2'>
        <h3 className='font-bold text-xl'><NavLink  to={`/blog/${post.id}`}>{post.title}</NavLink></h3>
        console.log({`/categories/${cat}`})
        <div>By <span className='italic '>{post.author}</span> on <span className='font-semibold underline underline-offset-2 decoration-2'><NavLink to={`/categories/${post.category.replace(" ","-")}`}>{post.category}</NavLink></span></div>
        <div className='text-sm'>Posted on <span >{post.date}</span></div>
        <div>{post.content}</div>
        <div className='flex flex-row'>
            {post.tags.map((tag,index)=>(
                <span key={index} className='font-semibold text-sm mr-2 cursor-pointer text-blue-800 underline underline-offset-2 decoration-2'><NavLink to={`/tags/${tag.replace(" ","-")}`}>{`#${tag}`}</NavLink></span>
            ))}
        </div>
    </div>
  )
}

export default Card