import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    return (
        props.posts.map(post => {
            // destructuring an object
            const {title, name, image, description} = post
            return (
                <div key={title} className={css.SearchItem}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt="random"></img>
                    <p>{description}</p>
                </div>
            )
        })
    )
}

export default PostItem