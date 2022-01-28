import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import LogoImg from '../../images/logo14.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  LeftNav,
  NavItemBtn,
  NavLinks,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>

            <LeftNav>
              <NavLogo smooth to="/#home" onClick={closeMobileMenu}>
		            <Logo src={LogoImg} /> 
              </NavLogo>
            </LeftNav>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
                <NavLinks smooth to="/#home" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/#mint" onClick={closeMobileMenu}>
                  Mint
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/#goals" onClick={closeMobileMenu}>
                  Goals
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to='/#FAQ' onClick={closeMobileMenu}>
                  FAQ
                </NavLinks>
              </NavItem>  

              <NavItemBtn>
                {button ? (
                  <a href='https://discord.gg/nqdRQSY7' target="_blank" rel="noopener noreferrer">
                    <Button primary>Join Discord</Button>
                  </a>
                ) : (
                  <a href='https://discord.gg/nqdRQSY7' target="_blank" rel="noopener noreferrer">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Join Discord
                    </Button>
                  </a>
                )}
              </NavItemBtn>
            </NavMenu>

          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
