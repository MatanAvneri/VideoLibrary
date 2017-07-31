'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Video = ({children, date, onClick}) => (
  <div className='video' onClick={() => onClick(date)}>
    <div style={{'font-weight': 'bold'}} className='video-name'>name: {children}</div>
    <div>date: {date}</div>
  </div>
)

Video.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string
}

export default Video
