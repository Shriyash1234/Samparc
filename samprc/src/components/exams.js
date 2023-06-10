import "./CSS/exams.css";
function Exams() {
    function registerationForm(){
        document.getElementsByClassName('cm-header-wrap')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('comapny-logo')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('caro')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('popular-exams')[0].style.filter = 'brightness(15%)'
        document.getElementsByClassName('registeration-form')[0].style.display = 'block'
    }
    
    return(
        <div>
        <section className="popular-exams">
            <div className="registerationSection">
                <button onClick={registerationForm} className="get-started">REGISTER TO GET JOB & LOANS</button>
            </div>
            <h2>Popular Exams</h2>
            <div className="exams">
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/iit_jee.png")} alt=""/>
                    <p>JEE Advanced</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/upsc-logo.png")} alt=""/>
                    <p>UPSC</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/cat.jpg")} alt=""/>
                    <p>CAT</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/neet.png")} alt=""/>
                    <p>NEET</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/bank-exams.jpg")} alt=""/>
                    <p>IBPS</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/SSC-CGL.png")} alt=""/>
                    <p>SSC-CGL</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/CA-exams.webp")} alt=""/>
                    <p>CA</p>
                </div>
                <div className="rectangle">
                    <img className="exam-logo" src={require("./Assests/Images/Exams/CBSE-12.png")} alt=""/>
                    <p>CBSE-12</p>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Exams