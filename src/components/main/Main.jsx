import React from 'react';
import styled from "styled-components";
import videoSrc from '/src/assets/6474371-hd_1280_720_25fps.mp4'
import AppLayout from "../../layouts";

const Main = () => {
    return (

        <Wrapper>
        <div className='video'>
            <video loop autoPlay muted>
                <source src={videoSrc} type='video/mp4'/>
            </video>
        </div>
            <div className="container">
                <div className="wave">
                    <svg viewBox="0 0 1440 320"
                         preserveAspectRatio="none">
                        <path
                            fill="#1d1733"

                            fillOpacity="1"
                            d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,149.3C840,128,960,128,1080,149.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>

            </div>
        </Wrapper>
      );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
  }

  video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .overlay {
    padding-top: 150px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    background-image: url(/src/assets/download.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60px;
    position: relative;
    z-index: 2;
  }
  

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
  }

 

  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 0;
  }

  .wave svg {
    width: 100%;
    height: 150px;
  }


`

export default Main;