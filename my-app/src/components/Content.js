import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

class Content extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoaded: false
      }
    }

    componentDidMount() {
        console.log('It did mount!')
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }
    
    render() {
        return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
            </div>
            <div className={css.SearchResults}>
                {
                    this.state.isLoaded ?
                    <PostItem savedPosts={savedPosts}/>
                    : <Loader />
                }
            </div>
        </div>
        )
    }
}

export default Content