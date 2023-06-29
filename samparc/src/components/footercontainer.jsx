import React from 'react'
import Footer from './footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Products</Footer.Title>
                    <Footer.Link href="#">IIT-JEE</Footer.Link>
                    <Footer.Link href="#">CAT</Footer.Link>
                    <Footer.Link href="#">UPSC</Footer.Link>
                    <Footer.Link href="#">IBPS</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Address:ABC,Gandhingar,<br/>Gujarat, 382355,India</Footer.Link>
                    <Footer.Link href="#">Phone Number:+91 9456789376</Footer.Link>
                    <Footer.Link href="#">Email:abc@gmail.com</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><FontAwesomeIcon className="fa-brands fb1" icon={faFacebookF} />&nbsp;&nbsp;Facebook</Footer.Link>
                    <Footer.Link href="#"><FontAwesomeIcon className="fa-brands insta1" icon={faInstagram} />&nbsp;&nbsp;Instagram</Footer.Link>
                    <Footer.Link href="#"><FontAwesomeIcon className="fa-brands youtube1" icon={faYoutube} />&nbsp;&nbsp;Youtube</Footer.Link>
                    <Footer.Link href="#"><FontAwesomeIcon className="fa-brands youtube1" icon={faLinkedin} />&nbsp;&nbsp;Linkedin</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <hr classname='footer-hr'/>
            <p className='copyright'>Copyright © 2023 Samparc Pvt. Ltd.: All rights reserved</p>
        </Footer>
    )
}