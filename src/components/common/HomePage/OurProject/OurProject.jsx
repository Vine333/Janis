import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Card, Image} from 'antd';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import img1 from 'public/imageWork/1.jpg'
import img2 from 'public/imageWork/2.jpg'
import img3 from 'public/imageWork/3.jpg'
import img4 from 'public/imageWork/4.jpg'
import img5 from 'public/imageWork/5.jpg'
import img6 from 'public/imageWork/6.jpg'
import img7 from 'public/imageWork/7.jpg'
import img8 from 'public/imageWork/8.jpg'
import img9 from 'public/imageWork/9.jpg'
import img10 from 'public/imageWork/10.jpg'
import img11 from 'public/imageWork/11.jpg'
import img12 from 'public/imageWork/12.jpg'
import img13 from 'public/imageWork/13.jpg'
import img14 from 'public/imageWork/14.jpg'
import img15 from 'public/imageWork/15.jpg'
import img16 from 'public/imageWork/18.jpg'
import img17 from 'public/imageWork/19.jpg'
import img18 from 'public/imageWork/21.jpg'
import img19 from 'public/imageWork/22.jpg'
import img20 from 'public/imageWork/23.jpg'
import img21 from 'public/imageWork/24.jpg'
import img22 from 'public/imageWork/17.jpg'
import img23 from 'public/imageWork/20.jpg'
import img24 from 'public/imageWork/16.jpg'


const {Meta} = Card
gsap.registerPlugin(ScrollTrigger);
const OurProject = () => {
    const items = [{id: 1, title: 'SKORPER', img: img1}, {
        id: 2, title: 'SKORPER', img: img2
    }, {id: 3, title: 'SKORPER', img: img3}, {
        id: 4, title: 'SKORPER', img: img4
    }, {id: 5, title: 'SKORPER', img: img5}, {
        id: 6, title: 'SKORPER', img: img6
    }, {id: 7, title: 'SKORPER', img: img7}, {
        id: 8, title: 'SKORPER', img: img8
    }, {id: 9, title: 'SKORPER', img: img9}, {
        id: 10, title: 'SKORPER', img: img10
    }, {id: 11, title: 'SKORPER', img: img11}, {
        id: 12, title: 'SKORPER', img: img12
    }, {id: 13, title: 'SKORPER', img: img13}, {
        id: 14, title: 'SKORPER', img: img14
    }, {id: 15, title: 'SKORPER', img: img15}, {
        id: 16, title: 'SKORPER', img: img16
    }, {id: 17, title: 'SKORPER', img: img17}, {
        id: 18, title: 'SKORPER', img: img18
    }, {id: 19, title: 'SKORPER', img: img19}, {
        id: 20, title: 'SKORPER', img: img20
    }, {id: 21, title: 'SKORPER', img: img21}, {
        id: 22, title: 'SKORPER', img: img22
    }, {id: 23, title: 'SKORPER', img: img23}, {
        id: 24, title: 'SKORPER', img: img24
    },

    ]
    const containerRef = useRef(null);
    const cardsRef = useRef([]);


    useEffect(() => {
        const mm = gsap.matchMedia(); // Подключаем MatchMedia

        mm.add("(min-width: 1024px)", () => {
            // Анимация для больших экранов
            ScrollTrigger.batch(cardsRef.current, {
                interval: 0.5, batchMax: 3, onEnter: (batch) => {
                    gsap.from(batch, {
                        opacity: 0, y: 100, duration: 1, stagger: 0.3, ease: "power3.out",
                    });
                },
            });
        });

        mm.add("(max-width: 1023px)", () => {

            ScrollTrigger.batch(cardsRef.current, {
                interval: 0.5, batchMax: 1, onEnter: (batch) => {
                    gsap.from(batch, {
                        opacity: 0, x: -50, // Анимация сдвига слева
                        duration: 1, stagger: 0.3, ease: "power2.out",
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

  .ant-card {
    width: 400px !important;
  }

  .ant-card-body {
    background-color: #e6c7ac !important;
  }

  @media (min-width: 2560px) {
    margin-top: 200px;
    .container {
      max-width: 1940px;
    }

    .card-wrapper {
      max-width: 1940px;

      .ant-card {
        width: 600px !important;
      }
    }
  }
  @media (max-width: 1024px) {

    .ant-card {
      width: 300px !important;
    }
  }
  @media (max-width: 768px) {
    .ant-card {
      width: 200px !important;
    }
  }
  @media (max-width: 425px) {
    .card-wrapper {
      padding: 10px;
    }

    .ant-card {
      width: 350px !important;
    }
  }
  @media (max-width: 320px) {
    .container {
      h2 {
        font-size: 30px;
      }
    }

    .ant-card {
      width: 300px !important;
    }
  }


`
export default OurProject;