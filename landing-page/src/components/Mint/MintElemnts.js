import styled from 'styled-components'


export const BigDiv = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`


export const BigContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

`

export const Banniere = styled.div`

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 100px;
`

export const LogoOne = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export const Count = styled.p`
  margin-top: 40px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
`

export const Cosy = styled.p`
  color: #872df5;
  font-weight: 300;
  font-size: 0.8rem;
`

export const Button = styled.button`
  border-radius: 8px;
  background: #872df5;
  white-space: nowrap;
  padding: 10px;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: bold;
  width: 250px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;
   margin-top: 12px;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #fff;
    color: #872df5;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const Image = styled.img` {
    width: 80%;
    padding-top: 40px;
}
`

export const FlexButtons = styled.div` {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
`

export const HeroP= styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 18px;
    text-align: justify;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24 px;

    @media screen and (max-width: 480px) {
        font-size: 18 px;

`;

export const HeroContainer = styled.div`
    background: #000000;
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

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    top: 8px;
    align-items: center;
`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 40 px;

    @media screen and (max-width: 480px) {
        font-size: 32 px;
    }
`;

export const HeroBg = styled.div`
    background-color: #14051a;
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