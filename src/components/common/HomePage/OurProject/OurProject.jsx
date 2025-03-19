import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Card, Image} from 'antd';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const {Meta} = Card
gsap.registerPlugin(ScrollTrigger);
const OurProject = () => {
    const items = [{id: 1, title: 'SKORPER', img: 'src/assets/imageWork/1.jpg'}, {
        id: 2,
        title: 'SKORPER',
        img: 'src/assets/imageWork/2.jpg'
    }, {id: 3, title: 'SKORPER', img: 'src/assets/imageWork/3.jpg'}, {
        id: 4,
        title: 'SKORPER',
        img: 'src/assets/imageWork/4.jpg'
    }, {id: 5, title: 'SKORPER', img: 'src/assets/imageWork/5.jpg'}, {
        id: 6,
        title: 'SKORPER',
        img: 'src/assets/imageWork/6.jpg'
    }, {id: 7, title: 'SKORPER', img: 'src/assets/imageWork/7.jpg'}, {
        id: 8,
        title: 'SKORPER',
        img: 'src/assets/imageWork/8.jpg'
    }, {id: 9, title: 'SKORPER', img: 'src/assets/imageWork/9.jpg'}, {
        id: 10,
        title: 'SKORPER',
        img: 'src/assets/imageWork/10.jpg'
    }, {id: 11, title: 'SKORPER', img: 'src/assets/imageWork/11.jpg'}, {
        id: 12,
        title: 'SKORPER',
        img: 'src/assets/imageWork/12.jpg'
    }, {id: 13, title: 'SKORPER', img: 'src/assets/imageWork/13.jpg'}, {
        id: 14,
        title: 'SKORPER',
        img: 'src/assets/imageWork/14.jpg'
    }, {id: 15, title: 'SKORPER', img: 'src/assets/imageWork/15.jpg'}, {
        id: 16,
        title: 'SKORPER',
        img: 'src/assets/imageWork/18.jpg'
    }, {id: 17, title: 'SKORPER', img: 'src/assets/imageWork/19.jpg'}, {
        id: 18,
        title: 'SKORPER',
        img: 'src/assets/imageWork/21.jpg'
    }, {id: 19, title: 'SKORPER', img: 'src/assets/imageWork/22.jpg'}, {
        id: 20,
        title: 'SKORPER',
        img: 'src/assets/imageWork/23.jpg'
    }, {id: 21, title: 'SKORPER', img: 'src/assets/imageWork/24.jpg'}, {
        id: 23,
        title: 'SKORPER',
        img: 'src/assets/imageWork/20.jpg'
    }, {id: 24, title: 'SKORPER', img: 'src/assets/imageWork/16.jpg'}, {
        id: 25,
        title: 'SKORPER',
        img: 'src/assets/imageWork/17.jpg'
    },

    ]
    const containerRef = useRef(null);
    const cardsRef = useRef([]);


    useEffect(() => {
        const mm = gsap.matchMedia(); // Подключаем MatchMedia

        mm.add("(min-width: 1024px)", () => {
            // Анимация для больших экранов
            ScrollTrigger.batch(cardsRef.current, {
                interval: 0.5,
                batchMax: 3,
                onEnter: (batch) => {
                    gsap.from(batch, {
                        opacity: 0,
                        y: 100,
                        duration: 1,
                        stagger: 0.3,
                        ease: "power3.out",
                    });
                },
            });
        });

        mm.add("(max-width: 1023px)", () => {

            ScrollTrigger.batch(cardsRef.current, {
                interval: 0.5,
                batchMax: 1,
                onEnter: (batch) => {
                    gsap.from(batch, {
                        opacity: 0,
                        x: -50, // Анимация сдвига слева
                        duration: 1,
                        stagger: 0.3,
                        ease: "power2.out",
                    });
                },
            });
        });

        return () => mm.revert(); // Очистка при размонтировании
    }, []);

    return (<Wrapper ref={containerRef}>
            <div className="container">
                <h2>Nos travaux:</h2>
                <div className="card-wrapper">
                    {items.map((item, index) => (<Card
                            hoverable
                            key={item.id}
                            ref={(el) => (cardsRef.current[index] = el)}

                            cover={<Image src={item.img}/>}
                            className="card"
                        >
                            <Meta title={item.title} description="Paris"/>
                        </Card>))}
                </div>
            </div>
        </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 55px;
      font-weight: 700;
      color: #404d53;
    }
  }

  .card-wrapper {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 1440px;
  }

  .card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;
    background-color: #e6c7ac;
  }
  .ant-card{
    width: 400px!important;
  }

  .ant-card-body {
    background-color: #e6c7ac !important;
  }

  @media (min-width: 2560px) {
    margin-top: 200px;
    .container{
      max-width: 1940px;
    }
    .card-wrapper{
      max-width: 1940px;
      .ant-card{
        width: 600px !important;
      }
    }
  }
  @media(max-width: 1024px){
    
    .ant-card{
      width: 300px !important;
    }
  } 
  @media(max-width: 768px){
    .ant-card{
      width: 200px !important;
    }
  }
  @media(max-width:425px){
    .card-wrapper{
      padding: 10px;
    }
    .ant-card{
      width: 350px !important;
    }
  }
  @media(max-width: 320px){
   .container{
     h2{
       font-size: 30px;
     }
   }
    .ant-card{
      width: 300px !important;
    }
  }
  

`
export default OurProject;