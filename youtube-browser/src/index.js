import React, { Component } from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import YTsearch from 'youtube-api-search'
import {
  SearchBar
} from './components/SearchBar'
import {
  VideoList
} from './components/VideoList'
import {
  VideoDetail
} from './components/VideoDetail'
const GOOGLE_API_KEY = 'AIzaSyCsuYMoW-yrZoR7MDEeoKXg-AE2GaiSF-E'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null,
    }

    this.videoSearch('Котики')
  }

  videoSearch(term) {
    YTsearch({
      key: GOOGLE_API_KEY,
      term
    }, videos => {
      console.log(videos)
     this.setState({ 
       videos,
       selectedVideo: videos[0]
     })
    })
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300)

    return (    
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))