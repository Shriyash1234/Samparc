import react, {useState,useEffect} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

import "./CSS/exams.css";
function Exams() {
    const [isVisible, setIsVisible] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };
    useEffect(() => {
        const handleScroll = () => {
          const trigger = document.getElementById('trigger');
    
          if (trigger) {
            const rect = trigger.getBoundingClientRect();
            setIsVisible(rect.top <= window.innerHeight * 0.5);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    function registerationForm(){
        document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('caro')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('Daily-contests')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('registeration-form')[0].style.display = 'block'
    }
    
    return(
        <div>
        <ScrollTrigger onEnter={handleVisibility} onExit={handleVisibility}>
        <section id="trigger" className={isVisible ? 'popular-exams animate' : 'popular-exams'}>
            <div className="registerationSection">
                <button onClick={registerationForm} className="get-started">REGISTER TO GET SCHOLARSHPS AND LOANS</button>
            </div>
            <h2>Popular Exams</h2>
            <div className="exams">
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/jee.png")} alt=""/>
                    <p>JEE Advanced</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/upsc.png")} alt=""/>
                    <p>UPSC</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/cat.png")} alt=""/>
                    <p>CAT</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/neet.png")} alt=""/>
                    <p>NEET</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/ibps.png")} alt=""/>
                    <p>IBPS</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/ssc.png")} alt=""/>
                    <p>SSC-CGL</p>
                </div>
                {/* <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/CA-exams.webp")} alt=""/>
                    <p>CA</p>
                </div> */}
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/icons/exams/school.png")} alt=""/>
                    <p>CBSE-12</p>
                </div>
            </div>
        </section>
        </ScrollTrigger>
        </div>
    )
}
export default Exams