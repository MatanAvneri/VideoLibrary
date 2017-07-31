'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import Video from './Video'

class VideoLibrary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: []
    }
    this.handleVideoClick = this.handleVideoClick.bind(this)
  }

  componentDidMount () {
    const videos = []
    for (let i = 0; i < 4; i ++) {
      videos.push({
        id: i,
        name: `video ${i}`,
        date: `date ${i}`
      })
    }

    this.setState({videos})
  }

  handleVideoClick (v) {
    this.printVideoDate(v)
  }

  printVideoDate (videoDate) {
    console.log(`clicked on ${videoDate}`)
  }

  render () {
    return <div>Library: {this.props.title} {this.props.age}
      <div>
        {
          this.state.videos.map((video) =>
            <Video key={video.id} date={video.date} onClick={this.handleVideoClick}>
              {video.name}
            </Video>
          )
        }
      </div>
    </div>
  }
}

VideoLibrary.propTypes = {
  title: PropTypes.string
}

VideoLibrary.defaultProps = {
  age: 13
}

export default VideoLibrary
