import styled from 'styled-components'


export const FAQContainer = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
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

export const Image = styled.img` 
    width: 20%;
    padding-top: 40px;

`

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
    background: #000000;
    display: flex;
    height: 240px;
    flex-direction: column;
    align-items: center;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
transition: all 0.2s ease-in-out;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
border-radius: 8px;
background: rgba(135, 45, 245, 0.2);
overflow: hidden;
border: solid rgba(135, 45, 245, 0.3);
`;

export const  FAQContent1 = styled.div`
    flex: 1;   
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



