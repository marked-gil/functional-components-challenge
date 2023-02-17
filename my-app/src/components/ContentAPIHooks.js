import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

function ContentAPIHooks() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        const fetchImages = () => {
            axios.get("https://pixabay.com/api/", {
                params: {
                    key: API_KEY,
                    page: 1,
                    per_page: 100
                }
            }).then(response => {
                console.log(response.data.hits)
                const fetchedPosts = response.data.hits;
                
                setIsLoaded(true)
                setPosts(fetchedPosts)
                setSavedPosts(fetchedPosts)

            }).catch(error => {
                console.log(error.message)
            })
        }

        fetchImages();
    }, [])

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })

        setPosts(filteredPosts)
    }

    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input 
                        type='text' 
                        id='searchInput' 
                        onChange={(event) => handleChange(event)}
                        placeholder='By Author'
                    />
                    <h4>posts found: {posts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItemAPI posts={posts}/>
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentAPIHooks