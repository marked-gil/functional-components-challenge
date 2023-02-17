import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isLoaded: false,
          posts: [],
          savedPosts: [],
        }
    }
  
    componentDidMount() {
        console.log('It did mount!')

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
                
                this.setState({
                    isLoaded: true,
                    posts: fetchedPosts,
                    savedPosts: fetchedPosts,
                })
            }).catch(error => {
                console.log(error.message)
            })
        }
        fetchImages();
    }
    
    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchInput'>Search:</label>
                        <input 
                            type='text' 
                            id='searchInput' 
                            onChange={(event) => this.handleChange(event)}
                            placeholder='By Author'
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItemAPI posts={this.state.posts}/>
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default ContentAPI