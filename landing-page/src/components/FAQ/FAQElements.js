import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const FAQContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;
export const FAQBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: gidden;
`;
export const ImageBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
export const FAQContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background: rgba(6, 0, 28, 0.4);
    overflow: hidden;
    border-top: solid rgba(255, 255, 255, 0.1);
    border-left: solid rgba(255, 255, 255, 0.1);
    border-bottom: solid rgba(255, 255, 255, 0.1);
    border-right: solid rgba(255, 255, 255, 0.1);
    backdropFilter: "blur(7px)"
`;
export const FAQH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40 px;

    @media screen and (max-width: 480px) {
        font-size: 32 px;
    }
`;
export const FAQP= styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24 px;

    @media screen and (max-width: 480px) {
        font-size: 18 px;

`;
export const FAQBtnWrapper= styled.div`
     margin-top: 32px;
     display: flex;
     flex-direction: coloumn;
     align-items: center;   
`;
export const ArrowForward= styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight= styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const TeamContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
    height: 1400px;
}

@media screen and (max-width: 480px) {
    height: 1800px;
}
`;

export const TeamWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

export const TeamCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 340px;
max-width: 2500px;
padding: 40px;
margin: 40px;
transition: all 0.2s ease-in-out;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
border-radius: 15px;
background: rgba(6, 0, 28, 0.4);
overflow: hidden;
border-top: solid rgba(255, 255, 255, 0.2);
border-left: solid rgba(255, 255, 255, 0.2);

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}
`;

export const TeamIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const TeamH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const TeamH2 = styled.h2`
font-size: 2.13rem;
margin-bottom: 10px;
color: white;

`;

export const TeamP = styled.h2`
font-size: 0.9rem;
text-align: justify;
color: white;

`;


