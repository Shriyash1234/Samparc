import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import './CSS/header.css'
import './loader'
function Header(){
    const Navigate = useNavigate();
    const myState = useSelector((state)=>state.setUserNameMail)
    function registerationForm(){
        Navigate(myState.name?'/Profile':'/Register')
    }
    return(
    <div>
        <div> 
           <Link to='/'> <img className='comapny-logo' src={require("./Assests/Images/icons/logo.png")}/></Link>
        </div>
        <div className="cm-header-wrap">
            <div className="cm-menu-wrap">
                <div className="cm-menu-btn fa fa-bars"></div>
                <div className="cm-menu-inner">
                    <ul className="menu-ul clear-all">
                        <li className="has-child">
                            <a href="#" className ='links'>Scholarships <br/>for school students</a>
                            <ul className="menu-ul level2">
                                <li>
                                    <a href="#" className ='links'>Class 5th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 6th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 7th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 8th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 9th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 10th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 11th</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>Class 12th</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child">
                            <a href="#" className ='links'>Scholarships <br/>for exams</a>
                            <ul className="menu-ul level2">
                                <li>
                                    <a href="#" className ='links'>UPSC</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>SSC</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>CAT</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>GATE</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>IIT-JEE</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child">
                            <a href="#" className ='links'>Resources</a>
                            <ul className="menu-ul level2">
                                <li>
                                    <a href="#" className ='links'>IIT-JEE</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>NEET</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>GATE</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>CAT</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>UPSC</a>
                                </li>
                                <li>
                                    <a href="#" className ='links'>SSC</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child">
                            <a href="#" className ='links'>Loans</a>
                            <ul className="menu-ul level2">
                                <li >
                                    <a href="#" className ='links'>Coming Soon</a>
                                </li>
                                {/* <li className="has-child">
                                    <a href="#" className ='links'>Education</a>
                                    <ul className="menu-ul level2">
                                        <li>
                                            <a href="#" className ='links'>Class 5th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 6th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 7th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 8th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 9th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 10th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 11th</a>
                                        </li>
                                        <li>
                                            <a href="#" className ='links'>Class 12th</a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <button onClick={registerationForm} className="get-started"><img src={myState.image}></img>{myState.name?'Profile':'Register'}</button>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;