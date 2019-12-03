import React from 'react'
import { Post } from '.'

interface props { }

const PostsContainer: React.FC<props> = (props) => {
  return (
    <ul id="post-list">
      <Post />
    </ul>
  )
}

export default PostsContainer