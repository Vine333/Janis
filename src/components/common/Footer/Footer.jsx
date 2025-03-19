import React, {useEffect} from 'react';
import styled from "styled-components";
import {PhoneOutlined} from "@ant-design/icons";
import {gsap} from "gsap";
import Logo from '/src/assets/icons.svg'
const Footer = () => {

    useEffect(()=>{
        let clx=gsap.context(()=>{
            gsap.fromTo(
                '.animate',
                {  rotationZ:-15,scale:1.3},
                {
                    scale:1,
                    rotationZ:0,
                    duration: 1,
                    repeat: -1, // Бесконечный цикл
                    yoyo: true, // Плавное возвращение к начальному состоянию
                    ease: "power2.inOut",
                }
            );
        });
        return () => clx.revert();
    },[])
    return (
        <Wrapper>
            <div className="container">
                <div className="logo">
                    <img src={Logo} width='200px' height='200px' alt=""/>
                    <p>SKORPER</p>
                </div>

                <div className='contact'>
                    <a href="tel:+33605044276" >
                        <PhoneOutlined color='#404d53' className='animate'/>  +33605044276 <p>(Janis Lasmanis)</p>
                    </a>
                    <a href="https://wa.me/+33605044276">
                        <img src="src/assets/whatsapp-color-svgrepo-com.svg" alt="" className='wats animate'/>   +33605044276 <p>(Janis Lasmanis)</p>
                    </a>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2025 SKORPER. Tous droits réservés.</p>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  border-top: 1px solid #404d53;
  margin-top: 50px;
  z-index: 100;
  width: 100%;

  //position: fixed;
  //background-color: transparent;
  //backdrop-filter: blur(10px) brightness(1.09) contrast(103%) saturate(91%);

  

  .contact {
   
    a {
      display: flex;
      color: #404d53;
      font-size: 25px;
      font-weight: 600;
      font-family: Inter, sans-serif;

      &:hover {
        scale: 105%;
      }
    }
    p{
      margin: 0;
    }
gap: 10px;
    display: flex;
    color: white !important;
    flex-direction: column;
  }

  .footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fdfdfd;
    font-size: 14px;
    opacity: 0.8;
  }


  .container {
    padding: 35px 50px;
    height: 110px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    p {
      margin-top: 40px;
      margin-bottom: 0;
      font-weight: 900;
    }

    display: flex;
    align-items: center;
    gap: 10px;
    color: #404d53;

    font-size: 25px;
  }
  @media(min-width: 2560px){
    .container{
      max-width: 1640px;
    }
    .logo{
      p{
        margin-top: 55px;
        font-size: 55px;
      }
      img{
        width: 200px ;
        height: 200px;
      }
    }
    .contact{
      a{
        font-size: 35px;
      }
    }
    .footer-bottom{
      margin-top: 30px;
      font-size: 30px;
    }
  }
  
  @media(max-width: 768px){
    .logo{
      gap: 0;
      img{
        width: 100px;
        height: 100px;
      }
      p{
        margin-top: 20px;
      }
    }
  }
  
  @media(max-width: 425px){
    .container{
      padding: 0;
    }
    .logo{
      gap: 0;
      p{
        margin-top: 13px;
      }
      img{
        width: 64px;
        height: 64px;
      }
      font-size: 20px;
    }
    .contact{

      margin-top: 40px;
      margin-right: 10px;
      gap: 0;
      a{
        font-size: 15px;
      }
      p{
        display: none;
        margin: 0;
      }
    }
    .wats{
      margin: 0;
      width: 15px;
      height: 15px;
    }
  }
`
export default Footer;