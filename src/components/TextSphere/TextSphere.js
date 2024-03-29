import React, { useEffect } from 'react'
import './TextSphere.css'

// Importing TagCloud package
import TagCloud from 'TagCloud'

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'NextJS',
        'Java',
        'Python',
        'Solidity',
        'C++',
        'C',
        'Azure',
        'Kafka',
        'Google Cloud',
        'Express',
        'Typescript',
        'NodeJS',
        'ES6',
        'GIT',
        'GITHUB',
      ]

      const options = {
        radius: 400,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      }

      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default TextShpere
