import styled from "styled-components";

export const Wrapper = styled.div`
  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: auto;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 100px;
  padding-left: 50px;
  display: flex;
  overflow: hidden;
  .wrapper_video{
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .video{
    height: inherit;
    width: inherit;
    object-fit: cover;
    margin: 0 auto;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Затемнение */
    z-index: 2;
  }
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 0;
    z-index: 3;
  }

  .wave svg {
    display: block;
    width: 100%;
  
  }
  .content{
    text-align: left;
    max-width: 1440px;
    width: 70%;
    margin: 0 auto;
    z-index: 5;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    color: white;
    
    h1{
      font-size: 50px;
      font-weight: 700;
    }
    ul
    {
      padding-inline-start: 10px;
    }
    p{
      width: 50%;
      font-size: 24px;
      line-height: 30px;
      margin-left: 20px;
    }
  }
  .head-mine{
    display: flex;
    align-items: center;
    h1{
      margin-top: 10px;
      margin-bottom: 0;
    }
  
  }
@media(min-width: 2560px){
  .content{
    
    p{
      font-size: 55px;
      line-height: 70px;
      width: 75%;
      font-weight: 400;
      opacity: 0.8;
    }
    
    
  }
  .head-mine{
    h1{
      margin-top: 35px;
      font-size: 90px ;
    }
    img{
      width: 200px;
      height: 200px;
    }
   
  }
}
  @media(max-width: 768px){
    .wave{
      svg{
        height:100px;
      }
    }
    .content {
      p{
        width: 100%;
      }
    }
  }
  @media(max-width: 425px){
    .content{
      margin-right: 20%;
      width: 100%;
      p{
        
      }
    }
  }
  @media(max-width: 320px){
    .content{
      h1{
        font-size: 25px;
      }
      p{
        margin-top: 0;
      }
    }
    .wave{
      height: 70px;
    }
  }
 
`
