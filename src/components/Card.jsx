import React from 'react'

function Card(props) {
    const post=props.post
    console.log("inside card")
  return (
    <div key={post.id}>
        <h3>{post.title}</h3>
        <div>By <span>{post.author}</span></div>
        <div>Posted on <span>{post.date}</span></div>
        <div>{post.content}</div>
        <div>
            {post.tags.map((tag,index)=>(
                <span key={index}>{`#${tag}`}</span>
            ))}
        </div>
    </div>
  )
}

export default Card