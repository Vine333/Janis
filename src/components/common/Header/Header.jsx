import React, {useEffect} from "react";
import styled from "styled-components";
import {PhoneOutlined} from "@ant-design/icons";
import {gsap} from "gsap";
import Logo from '/icons.svg'

const Header = () => {

useEffect(()=>{
    let clx=gsap.context(()=>{
            gsap.fromTo(
                '.animate',
                {  rotationZ:-15,scale:1.3},
                {
                    scale:1,
                    rotationZ:0,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut",
                }
        );
    });
    return () => clx.revert();
},[])
    return (<Wrapper>
            <div className="container">

                <div className="logo">
                    <img src={Logo} width='100px' height='100px' alt=""/>
                    <p>SKORPER</p>
                </div>

                <div className='contact'  >
                    <a href="tel:+33605044276" >
                      <PhoneOutlined  className='animate' />  +33605044276 <p>(Janis Lasmanis)</p>
                    </a>
                    <a href="https://wa.me/+33605044276">
                        <img src="/whatsapp-color-svgrepo-com.svg" alt="" className='wats animate'/>   +33605044276 <p>(Janis Lasmanis)</p>
                    </a>
                </div>
            </div>

        </Wrapper>);
};

const Wrapper = styled.div`
  z-index: 100;
  width: 100%;
  height: 100px;
  //position: fixed;
  //background-color: transparent;
  //backdrop-filter: blur(10px) brightness(1.09) contrast(103%) saturate(91%);
  
  .wats{
    margin-top: 10px;
  }
.contact{
  margin: 0;
  a{
    align-items: center;
    display: flex;
    color: white;
    font-size: 25px;
    font-family: Inter,sans-serif;
    font-weight: normal;
    margin: 0;
    &:hover{
      scale: 105%;
    }
  }
  p{
    margin: 0;
  }
  display: flex;
  gap: 10px;
  color: white !important;
  flex-direction: column;
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
    p{
      margin-top: 20px;
      margin-bottom: 0;
      font-weight: 900;
    }
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
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

export default Header;
