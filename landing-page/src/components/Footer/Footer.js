import React from 'react';
import LogoImg from '../../images/logo14.png';
import {
} from 'react-icons/fa';
import {
  FooterContainer,
  Logo,
  SocialMedia,
  SocialMediaWrap,
  Image,
  SocialLogo,
  WebsiteRights,
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo smooth to="/#home">
              <Logo src={LogoImg} /> 
          </SocialLogo>
          <WebsiteRights> © Copyright Swift 2022, <br>
          </br>All Rights Reserved </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
