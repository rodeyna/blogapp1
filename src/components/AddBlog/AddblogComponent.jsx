import React, { useEffect, useState } from 'react'

function AddblogComponent() {
//input variables
  const [post,setPost] = useState({
    title:'',
    text:'',
  })
  const handleChange = (e)=>{
    let targetName = e.target.name
    let targetValue = e.target.value
    setPost({...post,[targetName]:targetValue})
  }

//When refreching    222
  const [posts,setPosts] = useState(()=>{
    const savedPosts = localStorage.getItem("posts")
    return savedPosts ?JSON.parse(savedPosts) : []
  })

//When submitting
  const handleSubmit = (e)=>{
    e.preventDefault()
    

    if (post.title || post.text)
    {
      setPosts([...posts,post])
      setPost({title:"",text:""})
    }
    else
    alert("Please complete the form")
  }

//Storing data in every posts change
  useEffect(()=>{
    localStorage.setItem("posts",JSON.stringify(posts))
  },[posts])

  useEffect(() => {
    console.log("Posts mis à jour :", posts);
  }, [posts]);
  

    return ( 
    <>
    <ul>
        {posts.map((thing,index)=>{
        return  <li key={index}><strong>{thing.title}</strong> : {thing.text}</li>
       })}
    </ul>

      <h2>Create a post</h2>
      <form  className='inputContainer' onSubmit={handleSubmit} >
        <p>Title</p>
        <input type='text' name='title' value={post.title} onChange={handleChange} placeholder='Enter your title'></input>
        <p>Text</p>
        <input type='text' name='text' value={post.text} onChange={handleChange} placeholder='Type your text'></input>
        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default AddblogComponent