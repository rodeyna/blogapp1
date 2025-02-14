import React from 'react'

function Post() {
  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };
    return (
      <div>
        <button className="delete" onClick={handleDelete}>delete</button>
      </div>
  )
}

export default Post