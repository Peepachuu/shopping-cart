import React from "react";
import facebookIcon from "../icons/iconmonstr-facebook-1.svg";
import instagramIcon from '../icons/iconmonstr-instagram-11.svg';
import twitterIcon from "../icons/iconmonstr-twitter-1.svg";
import githubIcon from "../icons/iconmonstr-github-1.svg";

function Contact() {
    return (
        <section className="contact">
            <ul className="list">
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={githubIcon} alt="github icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={facebookIcon} alt="facebook icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={twitterIcon} alt="twitter icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img src={instagramIcon} alt="instagram icon"/>
                    </a>
                </li>
            </ul>
            <div>PokeCenter</div>
            <div>Random Location 43</div>
        </section>
    )
}

export default Contact;