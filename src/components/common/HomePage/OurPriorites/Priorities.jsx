import React, {useEffect, useRef} from 'react';
import Shield from '/shield-check-svgrepo-com.svg'
import Handshake from '/handshake-svgrepo-com.svg'
import Time from '/time-svgrepo-com.svg'
import Quality from '/quality-supervision-svgrepo-com.svg'

import styled from "styled-components";
import {gsap} from "gsap";

const Priorities = () => {
    const sectionRef = useRef(null);
    const leftBottomRef = useRef(null);
    const rightBottomRef = useRef(null);
    const center1Ref = useRef(null);
    const center2Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                toggleActions: "play none none reverse",
            }
        });


        tl.from([leftBottomRef.current, rightBottomRef.current], {
            opacity: 0,
            x: (i) => (i === 0 ? -100 : 100),
            duration: 1.3,
            ease: "power3.out",

        })
            .from([center1Ref.current, center2Ref.current], {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",

            }, "-=0.8");


        gsap.to(sectionRef.current, {

            y: -50,
            duration: 1.7,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",

                scrub: true,

            }
        });

    }, []);
    return (
        <Wrapper >
            <div className='container' ref={sectionRef}>
                <h2 className='pourquoi'>Pourquoi nous ?</h2>
                <div className='icons' >
                        <div className='plus left-side' ref={leftBottomRef}>
                           <div className='header'>
                               <img src={Shield} width='50px' height='50px' alt=""/>   Sérieux
                           </div>
                            Nous veillons à ce que nos clients aient confiance dans la qualité de nos services et dans notre capacité à répondre à leurs besoins.
                        </div>
                    <div className='plus left-mid' ref={center1Ref}>
                        <div className='header'>
                            <img src={Handshake} width='50px' height='50px' alt=""/> Responsabilité
                        </div>
                        Cet aspect est essentiel pendant le processus de construction, et nous veillons à ce que tous les détails du projet soient pris en compte et planifiés à l’avance afin que nous puissions livrer le projet au plus haut niveau.
                        </div>
                    <div className='plus right-mid' ref={center2Ref}>
                        <div className='header'>
                            <img src={Time} width='50px' height='50px' alt=""/> Respect des délais
                        </div>
                        Nous comprenons que le temps de nos clients est précieux. Nous nous efforçons de respecter les délais et de livrer le projet à temps sans délai.
                        </div >
                    <div className="plus right-side" ref={rightBottomRef}>
                        <div className='header'>
                            <img src={Quality} width='50px' height='50px' alt=""/>Qualité
                        </div>
                        Nous nous efforçons de fournir à nos clients des réparations de haute qualité en utilisant des matériaux de la plus haute qualité et en travaillant avec des professionnels expérimentés.
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 230px;
  margin-top: 50px;

  .container {
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    h2 {
      font-size: 55px;
      color:#33444c;
      font-weight: 900;
    }
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

  }

  .plus {
    line-height: 25px;
    letter-spacing: 1px;
    width: 25%;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 17px;

    color: white;
    font-size: 25px;
    padding: 20px;
    text-align: left;
  }

  .header {
    display: flex;
    font-size: 30px;
    font-weight: 700;

    align-items: center;
    justify-content: flex-start;
  }
  
  @media(min-width: 2560px){
    .container{
      max-width: 1940px;
      h2{
        font-size: 75px;
      }
    }
    .plus{
      font-size: 40px;
      line-height: 40px;
    }
    .header{
      font-size:  45px;
      line-height: 35px;
      img{
        width: 80px;
        height: 80px;
      }
    }
    padding-bottom: 150px;
  }
  
  @media(max-width: 1024px){
    .header{
      line-height: 27px;
    }
    margin-top: 0;
  }
  @media(max-width: 768px){
    .icons{
      flex-direction: column;
      gap: 0;
      align-items: center;
      justify-content: center;
      
    }
    .plus{
      width: 90%;
      height: auto;
    }
  }
  @media(max-width: 425px){
    .container{
      h2{
        font-size: 30px;
      }
      
    }
    .header{
      img{
        width: 35px;
        height: 35px;
      }
      font-size: 20px;
    }
  }
  @media(max-width: 375px){
    padding-top: 70px;
  }
  @media(min-width: 2560px){
    margin-top: 700px;
    padding: 0;
  }
`

export default Priorities;