import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert,Button } from "antd";
import styled from "styled-components";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            "service_wmx2vkl",
            "template_a7jqw42",
            formData,
            "mKYvmeEYDg4II1Ec_"
        )
            .then(() => setStatus("success"))
            .catch(() => setStatus("error"));
    };

    return (
        <Wrapper>
<div className="container">
                <form onSubmit={handleSubmit}  className='form'>
                    <h2 className='head'>Contactez-nous</h2>
                    <input

                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        required
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className='btn'>Envoyer</button>
                    {status && (
                        <Alert
                            message={status === "success" ? "Message envoyé !" : "Erreur d’envoi"}
                            type={status === "success" ? "success" : "error"}
                            showIcon
                        />
                    )}
                </form>

</div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 900px;
    gap: 30px;

    input {
      width: 100%;
      background-color: #e8d0bc;
      height: 50px;
      color: #000000;
      border-radius: 7px;
      padding: 20px;
      cursor: pointer;

      &::placeholder {
        color: #000000;
      }
    }
  }

  textarea {
    width: 900px;
    height: 200px;
    background-color: #e8d0bc;
    color: #000000;
    border-radius: 7px;
    padding: 20px;
    cursor: pointer;

    &::placeholder {
      color: #000000;

    }
  }

  .head {
    font-size: 45px;
    padding-top: 50px;
    color: #404d53;
    font-weight: 900;
  }
@media(min-width: 2560px){
  .container{
    max-width: 1940px;
    
  }
  .form{
    width: 100%;
    input{
      width: 90%;
      height: 70px;
      font-size: 30px;
      &::placeholder{
        font-size: 30px;
      }
    }
  }
}
  @media(max-width: 1080px){
    .form{
      width: 1026px;
    }
    textarea{
      width: 1026px;
    }
  }
  @media(max-width: 760px){
    .form{
     width: 700px;
    }
    
  }
  @media(max-width: 1024px){
    .form{
      width: 700px; ;
    }
    textarea{
      width: 700px;
    }
  }
  @media(max-width: 425px){
    .form{
      h2{
        font-size: 25px;
      }
      width: 400px; ;
    }
    textarea{
      width: 400px;
    }
  }
  @media(max-width: 375px){
    .form{
      width: 350px; ;
    }
    textarea{
      width: 350px;
    }
  }
  @media(max-width: 320px){
    .form{
      width: 300px; ;
    }
    textarea{
      width: 300px;
    }
  }
`
export default ContactForm;
