import './index.scss';
import logoTitle from "../../assets/images/logo-s2.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimateLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home=()=>{
const [letterClass,setLetterClass]=useState("text-animate")
const nameArray=["r","y","a","n"]
const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r']
useEffect(()=>{
     setTimeout(()=>{
        setLetterClass("text-animate-hover")
    },5000)
},[])

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                   <span className={`${letterClass}`}>H</span>  
                   <span className={`${letterClass} _12`}>i</span>,  
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>  
                    <span className={`${letterClass} _14`}>'m</span>  

                <img src={logoTitle} alt="developer"></img>
                <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Full Stack Developer / College Student</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home;