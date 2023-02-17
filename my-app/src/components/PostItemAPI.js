import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
  return (
    props.posts.map(post => {
        // destructuring an object
        const {id, type, user, webformatURL, tags} = post
        return (
            <div key={id} className={css.SearchItem}>
                <p>Artwork type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="random"></img>
                <p>Tags: {tags}</p>
            </div>
        )
    })  )
}

export default PostItemAPI