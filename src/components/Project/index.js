import { useEffect, useState } from "react"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"


const Project=()=>{
    const [letterClass,setLetterClass]=useState("text-animate")
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass("text-animate-hover")
       },3000)
   },[])
    return(
    
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','m','i','n','g ',' ','s','o','o','n']} idx={15}></AnimatedLetters>
                </h1>
            </div>
    </div>
    )
}
export default Project;

