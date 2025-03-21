import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts/index.jsx";
import Main from "../../components/common/HomePage/Lists/Lists.jsx";
import Priorities from "../../components/common/HomePage/OurPriorites/Priorities.jsx";
import OurProject from "../../components/common/HomePage/OurProject/OurProject.jsx";
import Answer from "../../components/common/HomePage/FormAnswer/Answer.jsx";



const HomePage = () => {


    return (
        <AppLayout>
            <Wrapper>
                <Main/>
                <Priorities/>
                <OurProject/>
               <Answer/>


            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 150px;
 
`;

export default HomePage;
