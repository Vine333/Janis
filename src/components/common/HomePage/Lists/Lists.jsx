import React, {useEffect, useRef} from 'react';
import {Wrapper} from "./style.js";
import Video from '/public/assets/6474371-uhd_3840_2160_25fps (online-video-cutter.com).mp4'
import Logo from '/public/assets/icons.svg'

const Main = () => {



    return (

        <Wrapper >
            <div className="wrapper_video">
                <video src={Video} className='video' autoPlay loop playsInline
                       muted/>


            </div>

            <div className='overlay'></div>
            <div className="wave">
                <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg"
                     version="1.1"   preserveAspectRatio="none">
                    <path
                        d="M0 351L40 375.7C80 400.3 160 449.7 240 455.7C320 461.7 400 424.3 480 405.8C560 387.3 640 387.7 720 345.2C800 302.7 880 217.3 920 174.7L960 132L960 541L920 541C880 541 800 541 720 541C640 541 560 541 480 541C400 541 320 541 240 541C160 541 80 541 40 541L0 541Z"
                        fill="#948179" strokeLinecap="round" strokeLinejoin="miter"></path>
                </svg>

            </div>
            <div className='content'  >
                <div className='head-mine' >
                    <img src={Logo} width='64px' height='64px' alt=""/>  <h1>SKORPER</h1>
                </div>
                <div >
                    <p>Nous sommes une équipe de pros qui crée des projets fiables et durables. Avec dix ans
                        d'expérience dans le bâtiment, on propose un service complet, de la conception à la livraison
                        clé en main. On inspire des changements de qualité et on transforme les idées en réalité.</p>

                </div>
            </div>
        </Wrapper>);
};

export default Main;