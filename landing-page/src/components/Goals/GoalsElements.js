import styled from 'styled-components';


export const GoalsContainer = styled.div`
height: 750px;
display: flex;
flex-direction: column;
justify-content: center;
background: #1A1A40;
align-items: center;
@media screen and (max-width: 768px) {
    height: 1400px;

}

@media screen and (max-width: 480px) {
    height: 1800px;
}
`;

export const GoalsWrapper = styled.div`
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

export const GoalsCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 350px;
padding: 40px;
margin: 20px;
transition: all 0.2s ease-in-out;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
border-radius: 8px;
background: #270082;
overflow: hidden;
border-top: solid rgba(255, 255, 255, 0.2);
border-left: solid rgba(255, 255, 255, 0.2);

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}
`;

export const GoalsIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`;

export const GoalsH1 = styled.h1`
font-size: 2.5rem;
color: #FA58B6;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const GoalsH2 = styled.h2`
font-size: 2.13rem;
margin-bottom: 10px;
color: white;

`;

export const GoalsP = styled.h2`
font-size: 0.9rem;
text-align: justify;
color: white;

`;

export const HeroBg = styled.div`
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
    width: 80%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


