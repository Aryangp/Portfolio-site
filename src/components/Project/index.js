import { useEffect, useState } from "react"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import portfolioData from "../../data/portfolio.json"


const Project=()=>{
    const [letterClass,setLetterClass]=useState("text-animate")
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass("text-animate-hover")
       },3000)
   },[])
   const renderPortfolio=(portfolioData)=>{
    return(
        <div className="image-container">
           {
            portfolioData.map((port,idx)=>{
                return(
                    <div className="image-box" key={idx}>
                       <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                       <div className="content"> 
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button
                            className="btn"
                            onClick={()=>window.open(port.url)}
                            >
                            View
                            </button>
                       </div>
                    </div>
                )
            })
           }
        </div>
    )
   }
    return(
    <>
        <div className="container  portfolio-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P ','r ','o ','j ','e ','c ','t ','s']} idx={15}></AnimatedLetters>
                </h1>
                <div> {renderPortfolio(portfolioData.portfolio)}</div>
            </div>
    </div>
    <Loader type="pacman"/>
    </>
    )
}
export default Project;

