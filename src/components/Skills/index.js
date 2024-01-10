import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import TextShpere from '../TextSphere/TextSphere'
import Loader from 'react-loaders'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          ></AnimatedLetters>
        </h1>
        <p className="para-container">
          <h3> Web Development:</h3>
          Proficient in <span className="skill_style">JavaScript</span> technologies with hands-on
          experience in <span className="skill_style">Node.js</span>, <span className="skill_style">Express</span>,<span className="skill_style">Typescript</span> ,and <span className="skill_style">React</span> for
          both frontend and backend development. Knowledgeable in <span className="skill_style">Java</span> for
          backend programming.
          <h3>Blockchain:</h3>
          Currently exploring <span className="skill_style">Solidity</span>, a blockchain language, and its
          applications. Experience with <span className="skill_style">Ethereum</span> for implementing blockchain
          technology in subscription plans.
          <h3>Other Proficiencies:</h3> Familiarity with <span className="skill_style">Python</span> for various
          projects, including the creation of a Python-based programming
          language, Gpzer. Expertise in developing and contributing to projects
          encompassing diverse functionalities, including <span className="skill_style">authentication
          systems, testing frameworks, npm packages, and more. Extensive
          exposure to technologies like Azure Service Bus, Kafka, and Google
          Cloud</span> through real-world project involvement and internships.
          <h3>Soft Skills:</h3> Strong emphasis on effective <span className="skill_style">teamwork</span> and
          <span className="skill_style">communication</span> derived from experiences in startup, university club,
          and internship settings. A demonstrated track record of collaborating
          closely with managers and teams to foster effective communication and
          achieve project goals.
        </p>
          </div>
          <div className="text-sphere">
              <TextShpere/>
          </div>
          <Loader type="pacman" />
    </div>
  )
}
export default Skills
